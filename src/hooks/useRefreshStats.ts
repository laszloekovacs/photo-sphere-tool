import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { refreshStats } from '../store/sceneSlice'

export const useRefreshStats = () => {
	const dispatch = useDispatch()

	return useCallback(() => {
		dispatch(refreshStats())
	}, [dispatch])
}
