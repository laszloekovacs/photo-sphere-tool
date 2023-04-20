import localforage from 'localforage'

/* this will reset every time we hit reload in the browser */
const urlMap = new Map<string, string>()

export const cacheSet = async (key: string, blob: Blob) => {
	if (await localforage.getItem(key)) {
		return
	}

	await localforage.setItem(key, blob)
	urlMap.set(key, URL.createObjectURL(blob))
}

/* clear the cache and all url's */
export const cacheClear = async () => {
	urlMap.forEach((value, key) => {
		URL.revokeObjectURL(value)
	})
	urlMap.clear()
	await localforage.clear()
}

/* get all keys of entries in the local store */
export const cacheGetKeys = async () => {
	return await localforage.keys()
}

/* fetch all url's */
export const cacheGetValues = async () => {
	for (const key of await localforage.keys()) {
		if (!urlMap.has(key)) {
			const blob = await localforage.getItem(key)
			const url = URL.createObjectURL(blob as Blob)
			urlMap.set(key, url)
		}
	}
	return Array.from(urlMap.values())
}
