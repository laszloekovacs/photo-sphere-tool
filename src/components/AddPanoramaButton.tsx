import React from 'react'
import Dialog from './Dialog'
import DropZone from './DropZone'

/* shows a dialog, where you can drag your images */
const AddPanoramaButton = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Add Panorama</button>
			<Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<DropZone />
			</Dialog>
		</div>
	)
}

export default AddPanoramaButton
