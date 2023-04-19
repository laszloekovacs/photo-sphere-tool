export const getStorageQuota = async () => {
	const quota = await navigator.storage.estimate()
	const totalSpace = quota.quota || 0
	const usedSpace = quota.usage || 0

	return {
		totalSpace,
		usedSpace
	}
}
