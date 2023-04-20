import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CreateSceneListItem from './CreateSceneListItem'
import { cacheGetList } from '../functions/cache'

/* find all active scenes */
const selectUsedIds = (state: State) => state.scenes.map((scene) => scene.id)

type ListItem = {
	key: string
	value: string
}

/* list all loaded panoramas, user can add to scene */
const CreateSceneList = () => {
	const active = useSelector(selectUsedIds)
	const [list, setList] = useState<ListItem[]>([])

	useEffect(() => {
		cacheGetList(/^pano\//).then((items) => {
			if (!items) {
				return
			}
			setList(items)
		})
	}, [list])

	return (
		<div className='h-full w-full'>
			<ul>
				{list.map((item) => (
					<CreateSceneListItem key={item.key} item={item} active={active} />
				))}
			</ul>
		</div>
	)
}

export default CreateSceneList
