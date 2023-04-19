import React from 'react'
import Dialog from './Dialog'
import DropZone from './DropZone'

/* shows a dialog, where you can drag your images */
const AddPanoramaButton = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div>
			<button onClick={() => setIsOpen((state) => !state)}>Add Panorama</button>
			{isOpen && (
				<Dialog onClose={() => setIsOpen(false)}>
					<DropZone prefix='pano/' />
				</Dialog>
			)}
		</div>
	)
}

export default AddPanoramaButton
