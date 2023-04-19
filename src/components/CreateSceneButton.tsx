import React from 'react'
import Dialog from './Dialog'
import CreateSceneList from './CreateSceneList'

const CreateSceneButton = () => {
	const [showDialog, setShowDialog] = React.useState(false)

	return (
		<div>
			<button onClick={() => setShowDialog((state) => !state)}>
				Create Scenes
			</button>
			<Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
				<CreateSceneList />
			</Dialog>
		</div>
	)
}

export default CreateSceneButton
