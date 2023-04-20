import React from 'react'
import { cacheClear } from '../functions/cache'
import { useRefreshStats } from '../hooks/useRefreshStats'

const ClearCacheButton = () => {
	const refresh = useRefreshStats()

	const handleClick = async () => {
		await cacheClear()
		refresh()
	}

	return (
		<div>
			<button onClick={handleClick}>Clear Cache</button>
		</div>
	)
}

export default ClearCacheButton
