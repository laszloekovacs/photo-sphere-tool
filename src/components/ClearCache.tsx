import localforage from 'localforage'
import React from 'react'

const ClearCache = () => {
	const handleClick = () => {
		localforage.clear()
	}

	return (
		<div>
			<button onClick={handleClick}>Clear Cache</button>
		</div>
	)
}

export default ClearCache
