import React from 'react'
import { useSelector } from 'react-redux'
import SceneListItem from './SceneListItem'

const getScenes = (state: State) => state.scenes

const SceneList = () => {
	const scenes = useSelector(getScenes)

	return (
		<div>
			<h1>Scene List</h1>

			{scenes.length == 0 ? (
				<p>No scenes</p>
			) : (
				<ul>
					{scenes.map((scene) => (
						<SceneListItem key={scene.id} scene={scene} />
					))}
				</ul>
			)}
		</div>
	)
}

export default SceneList
