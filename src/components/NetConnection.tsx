import React from 'react'
import { useEffect } from 'react'

const NetConnection = () => {
	const [isOnline, setOnline] = React.useState(true)

	useEffect(() => {
		window.addEventListener('online', () => setOnline(true))
		window.addEventListener('offline', () => setOnline(false))

		return () => {
			window.removeEventListener('online', () => setOnline(true))
			window.removeEventListener('offline', () => setOnline(false))
		}
	}, [])

	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}

export default NetConnection
