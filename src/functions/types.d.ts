declare global {
	interface Quota {
		total: string
		used: string
		free: string
		ratio: string
		items: number
		valid: boolean
	}
}

export {}
