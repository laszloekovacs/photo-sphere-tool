import React from 'react'
import { cacheSet } from '../functions/cache'
import { useRefreshStats } from '../hooks/useRefreshStats'

type Props = {
	prefix?: string
	onDone?: () => void
}

/* file drop zone, store dropped file in local storage */
const DropZone = ({ onDone, prefix }: Props) => {
	const uploadRef = React.useRef<HTMLInputElement>(null)
	const refreshStats = useRefreshStats()

	const handleSubmit = async (event: React.MouseEvent) => {
		try {
			event.preventDefault()
			const files = uploadRef.current?.files

			if (files?.length == 0) return

			for (const file of files!) {
				const entrykey = prefix ? prefix + file.name : file.name
				await cacheSet(entrykey, file)
			}

			uploadRef.current && (uploadRef.current.value = '')
			refreshStats()
			onDone && onDone()
		} catch (error) {
			console.error(error)
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
				submit files
			</button>
		</>
	)
}

export default DropZone
