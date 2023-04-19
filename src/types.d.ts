declare global {
	interface Editor {
		activeSceneId: string
		yaw: number
		pitch: number
	}

	interface Project {
		startSceneId: string
	}

	interface Hotspot {
		id: string
		yaw: number
		pitch: number
		type: 'scene' | 'info'
		targetId?: string
	}

	interface Scene {
		id: string
		title: string
		yawCorrection: number
		hotspots: Hotspot[]
	}

	interface State {
		editor: Editor
		project: Project
		scenes: Scene[]
	}
}

export {}
