/* pretty format file size */
export function prettySize(size: number, precision = 2) {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
	let unit = 0

	while (size >= 1024) {
		size /= 1024
		unit++
	}

	return `${size.toFixed(precision)}${units[unit]}`
}
