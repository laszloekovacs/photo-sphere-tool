import React, { useEffect, useState } from 'react'
import { getStorageQuota, prettySize } from '../functions/quota'
import { useSelector } from 'react-redux'
import localforage from 'localforage'

const getShouldRefresh = (state: State) => state.editor.triggerStatusBarRefresh

/* show available / used localforage storage space */
const StatusBar = () => {
	const refresh = useSelector(getShouldRefresh)

	const [stats, setStats] = useState({} as Quota)

	useEffect(() => {
		;(async () => {
			try {
				const qta = await getStorageQuota()
				const items = await localforage.length()

				setStats({ ...qta, ...{ items } })
			} catch (err) {
				console.error(err)
			}
		})()
	}, [refresh])

	return (
		<div>
			<span className='text-muted'>storage | free: </span>
			<span>{stats.free}</span>
			<span className='text-muted'> | used: </span>
			<span>{stats.used} </span>
			<span className='text-muted'> | r: </span>
			<span> {stats.ratio}</span>
			<span className='text-muted'> | assets: </span>
			<span> {stats.items}</span>
		</div>
	)
}

export default StatusBar
