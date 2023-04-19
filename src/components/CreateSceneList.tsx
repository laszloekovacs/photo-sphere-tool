import React, { useEffect } from 'react'
import localforage from 'localforage'
import { useAsync } from '../hooks/useAsync'
import DebugView from './DebugView'
import CreateSceneListItem from './CreateSceneListItem'

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

		console.log(list)

		return list
	} catch (err) {
		console.log(err)
	}
}

/* list all loaded panoramas, user can add to scene */
const CreateSceneList = () => {
	const { data, execute, error, loading } = useAsync(getPanosFromForage)

	useEffect(() => {
		execute()
	}, [execute])

	const handleAddScene = (id) => {
		console.log('add scene', id)
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
							onClick={handleAddScene}
						/>
					))}
			</ul>
		</div>
	)
}

export default CreateSceneList
