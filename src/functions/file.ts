/* pretty format file size */
export function fileSize(size: number, precision = 2) {
	const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	let unit = 0

	while (size >= 1024) {
		size /= 1024
		unit++
	}

	return `${size.toFixed(precision)} ${units[unit]}`
}
