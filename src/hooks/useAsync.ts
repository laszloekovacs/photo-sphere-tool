import { useState, useCallback } from 'react'

export const useAsync = <T extends unknown>(
	callback: (args?: unknown) => Promise<T>
) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<unknown>(null)
	const [data, setData] = useState<T | null>(null)

	const execute = useCallback(
		(args?: unknown) => {
			setLoading(true)
			setError(null)
			setData(null)

			callback(args)
				.then((response) => setData(response))
				.catch((error) => setError(error))
				.finally(() => setLoading(false))
		},
		[callback]
	)

	return { loading, error, data, execute } as const
}
