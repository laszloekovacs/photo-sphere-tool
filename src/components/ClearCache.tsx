import localforage from 'localforage'
import React from 'react'

const ClearCache = () => {
	const handleClick = () => {
		localforage.clear()
	}

	return <button onClick={handleClick}>clear cache</button>
}

export default ClearCache
