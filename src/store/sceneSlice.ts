import { createSlice } from '@reduxjs/toolkit'

const initialState: State = {
	project: {
		startSceneId: ''
	},
	editor: {
		activeSceneId: '',
		yaw: 0,
		pitch: 0,
		triggerStatusBarRefresh: 0
	},
	scenes: []
}

export const sceneSlice = createSlice({
	name: 'scene',
	initialState,
	reducers: {
		/* create an scene entry, don't add if already exist */
		createScene: (state, action: { type: string; payload: { id: string } }) => {
			const { id } = action.payload

			if (state.scenes.find((scene) => scene.id === id)) {
				return state
			}

			state.scenes.push({
				id: id,
				title: id,
				yawCorrection: 0,
				hotspots: []
			})
		},

		/* sets the scene in the viewport, check for invalid id */
		setActiveScene: (
			state,
			action: { type: string; payload: { id: string } }
		) => {
			const { id } = action.payload

			if (!state.scenes.find((scene) => scene.id === id)) {
				console.error(`Scene with id ${id} does not exist`)
				return state
			}

			state.editor.activeSceneId = action.payload.id
		},
		/* trigger status bar refresh */
		refreshStatusBar: (state) => {
			state.editor.triggerStatusBarRefresh++
		}
	}
})
