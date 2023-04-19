import React from 'react'
import AddPanoramaButton from './AddPanoramaButton'
import LoadDemoButton from './LoadDemoButton'
import ClearCache from './ClearCache'
import CreateSceneButton from './CreateSceneButton'

const Toolbar = () => {
	return (
		<div className='mb-4 flex flex-row gap-4 border-b border-neutral pb-2'>
			<AddPanoramaButton />
			<LoadDemoButton />
			<ClearCache />
			<CreateSceneButton />
		</div>
	)
}

export default Toolbar
