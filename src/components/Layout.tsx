import React from 'react'
import Toolbar from './Toolbar'

import StatusBar from './StatusBar'

import SceneList from './SceneList'
import PreviewContainer from './PreviewContainer'

const Layout = () => {
	return (
		<div id='layout' className='relative flex h-full w-full flex-col p-6'>
			<Toolbar />
			<div className='flex h-full w-full flex-row'>
				<SceneList />
				<PreviewContainer />
			</div>
			<div className='mt-auto flex flex-row justify-end border-t border-neutral'>
				<StatusBar />
			</div>
		</div>
	)
}

export default Layout
