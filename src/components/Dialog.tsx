import React from 'react'
import { useEffect } from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

type Props = {
	onClose: () => void
	children?: React.ReactNode
}

/* show child elements, click outside, hit esc, click close to close */
const Dialog = ({ onClose, children }: Props) => {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])

	return (
		<div className='bg-neutral-300 absolute left-0 top-0 isolate z-10 flex h-full w-full flex-col items-center justify-center'>
			<div
				id='dialog'
				className='isolate z-50 flex min-h-[300px] min-w-[400px] flex-col border border-neutral bg-secondary p-3'>
				<div className='flex flex-row justify-end pb-2'>
					<button onClick={onClose}>close</button>
				</div>
				<div className='flex h-full w-full flex-col overflow-y-auto'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Dialog
