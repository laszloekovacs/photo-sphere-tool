import localforage from 'localforage'

/* store image into the cache, key is the file name */
export const cacheSet = (key: string, value: string) => {
	return localforage.setItem(key, value)
}

export const cacheGet = (key: string) => {
	return localforage.getItem(key)
}

export const cacheGetUrl = async (key: string) => {
	const data = await localforage.getItem(key)
	return URL.createObjectURL(data as Blob)
}

export const cacheClear = () => {
	localforage.clear()
}

export const cacheGetAllUrls = async (filter?: string) => {
	const keys = await localforage.keys()
	const urls = await Promise.all(keys.map((key) => cacheGetUrl(key)))

	if (filter) {
		return urls.filter((url) => url.includes(filter))
	}

	return urls
}
