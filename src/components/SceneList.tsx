import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SceneListItem from './SceneListItem'
import { setActiveScene } from '../store/sceneSlice'

const SceneList = () => {
	const scenes = useSelector((state: State) => state.scenes)
	const dispatch = useDispatch()

	const handleClick = (id: string) => {
		dispatch(setActiveScene({ id }))
	}

	const list = (
		<ul>
			{scenes.map((scene) => (
				<SceneListItem key={scene.id} scene={scene} onClick={handleClick} />
			))}
		</ul>
	)

	return (
		<div className='w-1/4'>
			<h1>Scene List</h1>
			{scenes.length == 0 && <p>No scenes</p>}
			{scenes.length > 0 && list}
		</div>
	)
}

export default SceneList
