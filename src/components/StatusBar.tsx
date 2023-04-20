import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getStats } from '../functions/getStats'

/* show available / used localforage storage space */
const StatusBar = () => {
	const refresh = useSelector(
		(state: State) => state.editor.triggerStatusBarRefresh
	)
	const [stats, setStats] = useState({} as Quota)

	useEffect(() => {
		getStats().then((stats) => setStats(stats))
	}, [refresh])

	return (
		<div>
			<span className='text-muted'>storage | free: </span>
			<span>{stats.free}</span>
			<span className='text-muted'> | used: </span>
			<span>{stats.used} </span>
			<span className='text-muted'> / </span>
			<span> {stats.ratio}</span>
			<span className='text-muted'> | assets: </span>
			<span> {stats.items}</span>
		</div>
	)
}

export default StatusBar
