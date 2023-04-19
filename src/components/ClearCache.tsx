import localforage from 'localforage'
import React from 'react'
import { cacheClear } from '../cache/fileCache'

const ClearCache = () => {
	return (
		<div>
			<button onClick={() => cacheClear()}>Clear Cache</button>
		</div>
	)
}

export default ClearCache
