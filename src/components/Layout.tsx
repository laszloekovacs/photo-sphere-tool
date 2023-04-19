import React from 'react'
import Toolbar from './Toolbar'
import Preview from './Preview'
import StatusBar from './StatusBar'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import SceneList from './SceneList'

const Layout = () => {
	return (
		<div>
			<div>
				<Toolbar />
				<Preview />
				<StatusBar />
			</div>
			<div>
				<SceneList />
			</div>
		</div>
	)
}

export default Layout
