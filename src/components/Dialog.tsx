import React, { useCallback } from 'react'
import { useEffect } from 'react'

type Props = {
	onClose: () => void
	children?: React.ReactNode
}

const Dialog = ({ onClose, children }: Props) => {
	useEffect(() => {
		const handleKeyDown = (e) => {
			console.log('key down')
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
		<div
			onClick={() => onClose()}
			className='bg-neutral-300 absolute left-0 top-0 isolate z-50 flex h-full w-full flex-col items-center justify-center'>
			<div
				id='dialog'
				className='flex min-h-[300px] min-w-[400px] flex-col border border-neutral bg-secondary p-3'>
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
