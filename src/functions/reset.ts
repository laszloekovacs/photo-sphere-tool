import { resetState } from '../store/sceneSlice'
import { cacheClear } from './cache'

export const reset = (dispatch) => {
	// clear the console
	console.clear()
	// clear the cache
	cacheClear()
	// reset the redux state
	dispatch(resetState())
	console.log('reset')
}
