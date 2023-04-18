import React from 'react'
import AddPanoramaButton from './AddPanoramaButton'
import LoadDemoButton from './LoadDemoButton'
import ClearCache from './ClearCache'

const Toolbar = () => {
	return (
		<div className='flex flex-row gap-4'>
			<AddPanoramaButton />
			<LoadDemoButton />
			<ClearCache />
		</div>
	)
}

export default Toolbar
