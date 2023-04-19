import { configureStore, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { sceneSlice } from './sceneSlice'
import thunk from 'redux-thunk'

const perisisConfig = {
	key: 'persist',
	storage
}

/* merge reducers */
const persistedReducer = persistReducer(perisisConfig, sceneSlice.reducer)

/* create the store */

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})

//export const store = createStore(persistedReducer)

/* create the persistor */
export const persistor = persistStore(store)

/* export actions */
export const { createScene, setActiveScene } = sceneSlice.actions

/* delete persistor data */
export const deletePersistorData = async () => {
	try {
		await persistor.flush()
		await persistor.purge()
	} catch (err) {
		console.log(err)
	}
}
