import localforage from 'localforage'

/* this will conviniently reset every time we refresh,
and objectUrl's become invalid */
const urlMap = new Map<string, string>()

/* store a blob in the storage */
export const cacheSet = async (key: string, blob: Blob) => {
	try {
		/* skip if exist */
		if (await localforage.getItem(key)) {
			console.log('cacheSet: already exist', key)
			return
		}
		await localforage.setItem(key, blob)
		const url = URL.createObjectURL(blob)
		urlMap.set(key, url)
	} catch (error) {
		console.error(error)
	}
}

/* clear the cache and all url's */
export const cacheClear = async () => {
	try {
		await localforage.clear()
		urlMap.forEach((url) => URL.revokeObjectURL(url))
		urlMap.clear()
	} catch (error) {
		console.error(error)
	}
}

/* get the url, try to memoize into the urlMap */
export const cacheGetUrl = async (key: string) => {
	try {
		if (!urlMap.has(key)) {
			const blob = await localforage.getItem(key)
			if (blob) {
				const url = URL.createObjectURL(blob as Blob)
				urlMap.set(key, url)
			}
		}
		return urlMap.get(key)
	} catch (error) {
		console.error(error)
	}
}
