import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getStats } from '../functions/getStats'
import StatusNet from './StatusNet'
import { cacheGetMap } from '../functions/cache'

/* show available / used localforage storage space */
const StatusBar = () => {
	const refresh = useSelector(
		(state: State) => state.editor.triggerStatusBarRefresh
	)
	const [stats, setStats] = useState({} as Quota)

	useEffect(() => {
		getStats().then((stats) => setStats(stats))
	}, [refresh])

	const onClick = async () => {
		console.log(await cacheGetMap())
	}

	return (
		<div className='flex flex-row justify-end'>
			<div>
				<span className='text-muted'>{'storage | free: '}</span>
				<span>{stats.free}</span>
				<span className='text-muted'>{' | used: '}</span>
				<span>{stats.used} </span>
				<span className='text-muted'>{' / '}</span>
				<span> {stats.ratio}</span>
				<button onClick={onClick} className='text-muted'>
					{' | assets: '}
				</button>
				<span> {stats.items}</span>
				<span> | </span>
			</div>
			<StatusNet />
		</div>
	)
}

export default StatusBar
