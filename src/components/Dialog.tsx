import React from 'react'

type Props = {
	isOpen: boolean
	onClose?: () => void
	children?: React.ReactNode
}

const Dialog = ({ isOpen, onClose, children }: Props) => {
	if (!isOpen) return null

	return (
		<div className='border border-black p-2'>
			<div>{children}</div>
			<button onClick={onClose}>close</button>
		</div>
	)
}

export default Dialog
