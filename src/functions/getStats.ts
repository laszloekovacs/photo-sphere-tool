import localforage from 'localforage'
import { getStorageQuota } from './getStorageQuota'

export const getStats = async () => {
	try {
		const qta = await getStorageQuota()
		const items = await localforage.length()

		return { ...qta, ...{ items } }
	} catch (err) {
		console.error(err)
		return {} as Quota
	}
}
