import React from 'react'
import { loadDemoFiles } from '../functions/loadDemoFiles'
import { useRefreshStats } from '../hooks/useRefreshStats'

/* load assets from ./public, uploaded with the project, filenames are in the included json  */
const LoadDemoButton = () => {
	const refreshStats = useRefreshStats()

	const handleClick = async () => {
		await loadDemoFiles()
		refreshStats()
	}

	return (
		<div>
			<button onClick={handleClick}>Load Demo</button>
		</div>
	)
}

export default LoadDemoButton
