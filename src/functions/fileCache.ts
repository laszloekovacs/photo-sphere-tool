import localforage from 'localforage'

/* this will conviniently reset every time we refresh,
and objectUrl's become invalid */
const urlMap = new Map<string, string>()

/* store a blob in the storage */
export const cacheSet = (key: string, blob: Blob) => {
	localforage.setItem(key, blob)
	const url = URL.createObjectURL(blob)
	urlMap.set(key, url)
}

/* clear the cache and all url's */
export const cacheClear = () => {
	localforage.clear()
	urlMap.forEach((url) => URL.revokeObjectURL(url))
	urlMap.clear()
}

/* get the url, if not in the map, create url */
export const cacheGetUrl = async (key: string) => {
	try {
		if (urlMap.has(key)) {
			return urlMap.get(key) as string
		} else {
			const item = await localforage.getItem<Blob>(key)

			if (item) {
				const url = URL.createObjectURL(item as Blob)
				urlMap.set(key, url)
				return url
			} else {
				return null
			}
		}
	} catch (e) {
		console.error(e)
		return null
	}
}
