import React from 'react'
import AddPanoramaButton from './AddPanoramaButton'
import LoadDemoButton from './LoadDemoButton'
import ClearCacheButton from './ClearCacheButton'
import CreateSceneButton from './CreateSceneButton'

const Toolbar = () => {
	return (
		<div className='mb-4 flex flex-row gap-4 border-b border-neutral pb-2'>
			<AddPanoramaButton />
			<LoadDemoButton />
			<ClearCacheButton />
			<CreateSceneButton />
		</div>
	)
}

export default Toolbar
