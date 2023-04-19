import React from 'react'
import AddPanoramaButton from './AddPanoramaButton'
import LoadDemoButton from './LoadDemoButton'
import ClearCache from './ClearCache'
import CreateSceneButton from './CreateSceneButton'

const Toolbar = () => {
	return (
		<div className='flex flex-row gap-4'>
			<AddPanoramaButton />
			<LoadDemoButton />
			<ClearCache />
			<CreateSceneButton />
		</div>
	)
}

export default Toolbar
