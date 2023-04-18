import React from 'react'

const fetcher = (url: string) => fetch(url).then((r) => r.text())

/* load assets from public, uploaded with the project  */
const LoadDemoButton = () => {
	const handleClick = async () => {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<button onClick={handleClick}>Load Demo assets</button>
		</div>
	)
}

export default LoadDemoButton
