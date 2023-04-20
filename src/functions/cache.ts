import localforage from 'localforage'

/* this will conviniently reset every time we refresh,
and objectUrl's become invalid */
const urlMap = new Map<string, string>()

/* get our handy url map */
export const cacheGetMap = async () => {
	try {
		await cacheRebuild()
		return urlMap
	} catch (error) {
		console.error(error)
	}
}

/* return filtered cache map */
export const cacheGetList = async (filter?: RegExp) => {
	try {
		await cacheRebuild()
		const list: { key: string; value: string }[] = []

		for (const [key, value] of urlMap) {
			/* if no filter, or filter matches */
			if (!filter || filter?.test(key)) {
				list.push({ key, value })
			}
		}

		return list
	} catch (error) {
		console.error(error)
	}
}

/* store a blob in the storage */
export const cacheSet = async (key: string, blob: Blob) => {
	try {
		/* skip if exist */
		if (await localforage.getItem(key)) {
			return
		}
		await localforage.setItem(key, blob)
	} catch (error) {
		console.error(error)
	}
}

/* clear the cache and all url's */
export const cacheClear = async () => {
	try {
		await localforage.clear()
	} catch (error) {
		console.error(error)
	}
}

/* rebuid urlMap if there's discrepancies */
export const cacheRebuild = async () => {
	try {
		/* compare map forage size */
		if (urlMap.size != (await localforage.length())) {
			/* clear map */
			urlMap.forEach((value, key) => {
				URL.revokeObjectURL(value)
			})
			urlMap.clear()
			/* rebuild map */
			const keys = await localforage.keys()
			for (const key of keys) {
				const blob = await localforage.getItem(key)
				const url = URL.createObjectURL(blob as Blob)
				urlMap.set(key, url)
			}
		}
	} catch (error) {
		console.error(error)
	}
}

/* get object urls */
export const cacheGetUrl = async (key: string) => {
	try {
		await cacheRebuild()

		/* if url is in map, return it */
		if (urlMap.has(key)) {
			return urlMap.get(key)
		}
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
	}
}
