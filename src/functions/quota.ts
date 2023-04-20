/* pretty format file size */
export function prettySize(size: number, precision = 2) {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
	let unit = 0

	while (size >= 1024) {
		size /= 1024
		unit++
	}
	console.log(size, unit)

	return `${size.toFixed(precision)}${units[unit]}`
}

/* get storage quota in pretty strings */
export const getStorageQuota = async () => {
	const stats = {} as Quota

	try {
		const qt = await navigator.storage.estimate()

		if (!qt || qt.usage == undefined || qt.quota == undefined) {
			throw new Error('navigator.storage.estimate() is not supported')
		}

		stats.total = prettySize(qt.quota)
		stats.used = prettySize(qt.usage)

		const free = qt.quota - qt.usage
		stats.free = prettySize(free)

		/* avoid zero divide */
		let ratio = (qt.usage / qt.quota) * 100
		stats.ratio = ratio ? `${ratio.toFixed(4)}%` : 'N/A'
		stats.valid = true
		stats.items = 0
	} catch (err) {
		console.error(err)
		stats.valid = false
	} finally {
		return stats
	}
}
