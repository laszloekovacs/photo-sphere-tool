import React, { useReducer, useState } from 'react'
import localforage from 'localforage'

type Props = {
	onDone?: () => void
}

/* file drop zone */
const DropZone = ({ onDone }: Props) => {
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

				await localforage.setItem(key, data, (err, value) => {
					if (err) {
						console.log(err)
					} else {
						console.log(`File ${key} saved to localforage.`)
					}
				})
			}

			/* clear the file dropzone */
			uploadRef.current.files = null
			onDone && onDone()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<input
				ref={uploadRef}
				className='h-60 w-60 border-2 border-dashed border-black'
				type='file'
				name='file_upload'
				id='file_upload'
				multiple={true}
				accept='image/*'
			/>
			<button onClick={handleSubmit}>submit</button>
		</div>
	)
}

export default DropZone
