import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SceneListItem from './SceneListItem'
import { setActiveScene } from '../store'

const getScenes = (state: State) => state.scenes

const SceneList = () => {
	const scenes = useSelector(getScenes)
	const dispatch = useDispatch()

	const handleClick = (id: string) => {
		dispatch(setActiveScene({ id }))
	}

	return (
		<div className='w-1/4'>
			<h1>Scene List</h1>

			{scenes.length == 0 ? (
				<p>No scenes</p>
			) : (
				<ul>
					{scenes.map((scene) => (
						<SceneListItem key={scene.id} scene={scene} onClick={handleClick} />
					))}
				</ul>
			)}
		</div>
	)
}

export default SceneList
