import React from 'react'
import Dialog from './Dialog'

/* takes in button and the content of the dialog */
const DialogButton = ({ label, children }) => {
	const [isOpen, setOpen] = React.useState(false)

	return (
		<div>
			<button onClick={() => setOpen(true)}>{label}</button>
			<Dialog onClose={() => setOpen(false)}>{children}</Dialog>
		</div>
	)
}

export default DialogButton
