import React, { useReducer, useState } from 'react'
import localforage from 'localforage'

type Props = {
	prefix?: string
	onDone?: () => void
}

/* file drop zone */
const DropZone = ({ onDone, prefix }: Props) => {
	const uploadRef = React.useRef<HTMLInputElement>(null)

	/* store dropped file in local storage */
	const handleSubmit = async (event: React.MouseEvent) => {
		try {
			event.preventDefault()

			const files = uploadRef.current?.files

			if (!files) return

			for (const file of files) {
				const key = file.name
				const data = file as Blob

				const entrykey = prefix ? prefix + key : key

				await localforage.setItem(entrykey, data, (err, value) => {
					if (err) {
						console.log(err)
					} else {
						console.log(`File ${key} saved to localforage.`)
					}
				})
			}

			/* clear the file dropzone */
			uploadRef.current.files = null
			onDone?.()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className='relative isolate flex h-full w-full flex-col border-2 border-dashed border-primary'>
				<input
					className='absolute left-0 top-0 z-0 h-full w-full bg-slate-300 opacity-0'
					ref={uploadRef}
					type='file'
					name='file_upload'
					id='file_upload'
					multiple={true}
					accept='image/*'
				/>
				<div className='absolute -z-10 flex h-full w-full flex-col items-center justify-center'>
					<p>click to select, or drop image files here</p>
				</div>
			</div>
			<button className='pt-4' onClick={handleSubmit}>
				submit
			</button>
		</>
	)
}

export default DropZone
