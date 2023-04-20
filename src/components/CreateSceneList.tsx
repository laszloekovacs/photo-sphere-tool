import React, { useEffect } from 'react'
import localforage from 'localforage'
import { useAsync } from '../hooks/useAsync'
import CreateSceneListItem from './CreateSceneListItem'
import { useDispatch, useSelector } from 'react-redux'
import { createScene } from '../store/sceneSlice'

type ListItem = {
	key: string
	value: Blob
}

const getPanosFromForage = async () => {
	try {
		const list: ListItem[] = []

		await localforage.iterate((value, key) => {
			list.push({ key, value: value as Blob })
		})

		return list
	} catch (err) {
		console.log(err)
		return []
	}
}

const selectUsedIds = (state: State) => state.scenes.map((scene) => scene.id)

/* list all loaded panoramas, user can add to scene */
const CreateSceneList = () => {
	const { data, execute, error, loading } = useAsync(getPanosFromForage)
	const dispatch = useDispatch()
	const existingSeceneIds = useSelector(selectUsedIds)

	useEffect(() => {
		execute()
	}, [execute])

	const handleCreateScene = (id: string) => {
		dispatch(createScene({ id }))
	}

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error as string}</div>

	return (
		<div>
			<ul>
				{data &&
					data.map((item) => (
						<CreateSceneListItem
							key={item.key}
							id={item.key}
							value={item.value}
							onClick={handleCreateScene}
							outlined={existingSeceneIds.includes(item.key)}
						/>
					))}
			</ul>
		</div>
	)
}

export default CreateSceneList
