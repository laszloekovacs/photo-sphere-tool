import React from 'react'
import { cacheClear } from '../functions/cache'
import { useRefreshStats } from '../hooks/useRefreshStats'

const Reset = () => {
	const refresh = useRefreshStats()

	const handleClick = async () => {
		await cacheClear()
		refresh()
	}

	return (
		<div>
			<button onClick={handleClick}>Reset</button>
		</div>
	)
}

export default Reset
