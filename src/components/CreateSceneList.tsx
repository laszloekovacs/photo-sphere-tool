import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateSceneListItem from './CreateSceneListItem'
import { cacheGetAll } from '../functions/cache'
import { createScene } from '../store/sceneSlice'

/* find all active scenes */
const selectUsedIds = (state: State) => state.scenes.map((scene) => scene.id)

/* list all loaded panoramas, user can add to scene */
const CreateSceneList = () => {
	const dispatch = useDispatch()
	const active = useSelector(selectUsedIds)
	const [list, setList] = useState<{ key: string; value: string }[]>([])

	// add selected to the active list
	const handleAdd = (key: string) => {
		dispatch(createScene({ id: key }))
	}

	useEffect(() => {
		// get all pano/ items from cache
		cacheGetAll().then((items) => {
			const panos = items.filter((item) => item.key.startsWith('pano/'))
			setList(panos)
		})
	}, [list])

	return (
		<div className='h-[400px] w-[700px]'>
			<ul className='grid grid-cols-3'>
				{list.map((item) => (
					<CreateSceneListItem
						key={item.key}
						item={item}
						active={active}
						onAdd={handleAdd}
					/>
				))}
			</ul>
		</div>
	)
}

export default CreateSceneList
