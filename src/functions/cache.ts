import localforage from 'localforage'

/* this will reset every time we hit reload in the browser */
const urlMap = new Map<string, string>()

export const cacheSet = async (key: string, blob: Blob) => {
	try {
		if (await localforage.getItem(key)) {
			return
		}

		await localforage.setItem(key, blob)
		urlMap.set(key, URL.createObjectURL(blob))
	} catch (error) {
		console.error(error)
	}
}

/* clear the cache and all url's */
export const cacheClear = async () => {
	try {
		urlMap.forEach((value, key) => {
			URL.revokeObjectURL(value)
		})
		urlMap.clear()
		await localforage.clear()
	} catch (error) {
		console.error(error)
	}
}

/* get all keys of entries in the local store */
export const cacheGetKeys = async () => {
	try {
		return await localforage.keys()
	} catch (error) {
		console.error(error)
		return []
	}
}

/* fetch all url's */
export const cacheGetValues = async () => {
	try {
		for (const key of await localforage.keys()) {
			if (!urlMap.has(key)) {
				const blob = await localforage.getItem(key)
				const url = URL.createObjectURL(blob as Blob)
				urlMap.set(key, url)
			}
		}
		return Array.from(urlMap.values())
	} catch (error) {
		console.error(error)
		return []
	}
}

/* fetch one url */
export const cacheGet = async (key: string) => {
	try {
		if (!urlMap.has(key)) {
			const blob = await localforage.getItem(key)
			const url = URL.createObjectURL(blob as Blob)
			urlMap.set(key, url)
		}
		return urlMap.get(key)
	} catch (error) {
		console.error(error)
	}
}

/* get the list of key / values */
export const cacheGetAll = async () => {
	try {
		const keys = await cacheGetKeys()
		const values = await cacheGetValues()
		return keys?.map((key, index) => ({ key, value: values[index] }))
	} catch (error) {
		console.error(error)
		return []
	}
}
