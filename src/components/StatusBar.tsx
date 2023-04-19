import React, { useEffect, useState } from 'react'
import { getStorageQuota } from '../functions/quota'
import { prettySize } from '../functions/file'
import { useSelector } from 'react-redux'
import localforage from 'localforage'

const StatusBar = () => {
	const [quota, setQuota] = useState<number[]>([0, 0])
	const state = useSelector((s) => s)
	const [numAssets, setNumAssets] = useState(0)

	useEffect(() => {
		getStorageQuota()
			.then((quota) => {
				setQuota([quota.totalSpace, quota.usedSpace])
				console.log('quota refreshed')
			})
			.catch((error) => {
				console.log(error)
			})

		localforage
			.length()
			.then((numAssets) => {
				setNumAssets(numAssets)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [state])

	return (
		<div>
			<span className='text-muted'>storage | free: </span>
			<span>{prettySize(quota[0])}</span>
			<span className='text-muted'> | used: </span>
			<span>{prettySize(quota[1])} </span>
			<span className='text-muted'> | assets: </span>
			<span> {numAssets}</span>
		</div>
	)
}

export default StatusBar
