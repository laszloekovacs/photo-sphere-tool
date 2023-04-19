import React from 'react'
import Toolbar from './Toolbar'

import StatusBar from './StatusBar'

import SceneList from './SceneList'
import PreviewContainer from './PreviewContainer'

const Layout = () => {
	return (
		<div>
			<div>
				<Toolbar />
				<PreviewContainer />
				<StatusBar />
			</div>
			<div>
				<SceneList />
			</div>
		</div>
	)
}

export default Layout
