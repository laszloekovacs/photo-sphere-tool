import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0
}

const editorSlice = createSlice({
	name: 'editor',
	initialState,
	reducers: {
		add: (state, action) => {
			state.value += action.payload
		}
	}
})

export const { add } = editorSlice.actions

export default editorSlice.reducer

export const store = configureStore({
	reducer: editorSlice.reducer
})
