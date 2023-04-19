import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState: State = {
	project: {
		startSceneId: 'start'
	},
	editor: {
		activeSceneId: 'start',
		yaw: 0,
		pitch: 0
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
		}
	}
})

export const { createScene } = sceneSlice.actions

export const { reducer } = sceneSlice

export const store = configureStore({
	reducer: sceneSlice.reducer
})
