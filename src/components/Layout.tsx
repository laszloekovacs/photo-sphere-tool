import React from 'react'
import ToolBar from './ToolBar'

import StatusBar from './StatusBar'

import SceneList from './SceneList'
import PreviewContainer from './PreviewContainer'
import Header from './Header'

const Layout = () => {
	return (
		<div id='layout' className='relative flex h-full w-full flex-col p-6'>
			<div>
				<Header />
				<ToolBar />
			</div>

			<div className='flex h-full w-full flex-row'>
				<SceneList />

				<PreviewContainer />
			</div>
			<div className='mt-auto border-t border-neutral'>
				<StatusBar />
			</div>
		</div>
	)
}

export default Layout
