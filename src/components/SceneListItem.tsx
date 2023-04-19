import React from 'react'

type Props = {
	scene: Scene
	onClick: (id: string) => void
}

const SceneListItem = ({ scene, onClick }) => {
	return (
		<li>
			<div onClick={() => onClick(scene.id)}>{scene.id}</div>
		</li>
	)
}

export default SceneListItem
