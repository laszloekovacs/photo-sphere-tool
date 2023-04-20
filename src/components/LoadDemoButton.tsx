import React from 'react'
import { loadDemoFiles } from '../functions/loadDemoFiles'
import { useRefreshStats } from '../hooks/useRefreshStats'

const fetcher = (url: string) => fetch(url).then((r) => r.blob())

/* load assets from ./public, uploaded with the project, filenames are in the included json  */
const LoadDemoButton = () => {
	const refresh = useRefreshStats()

	const handleClick = async () => {
		await loadDemoFiles(fetcher)
		refresh()
	}

	return (
		<div>
			<button onClick={handleClick}>Load Demo</button>
		</div>
	)
}

export default LoadDemoButton
