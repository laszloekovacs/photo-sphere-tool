import React from 'react'
import { cacheClear } from '../functions/fileCache'

const ClearCacheButton = () => {
	return (
		<div>
			<button onClick={() => cacheClear()}>Clear Cache</button>
		</div>
	)
}

export default ClearCacheButton
