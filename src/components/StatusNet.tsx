import React from 'react'
import { useEffect } from 'react'
import { FiWifi, FiWifiOff } from 'react-icons/fi'

const StatusNet = () => {
	const [isOnline, setOnline] = React.useState(true)

	useEffect(() => {
		window.addEventListener('online', () => setOnline(true))
		window.addEventListener('offline', () => setOnline(false))

		return () => {
			window.removeEventListener('online', () => setOnline(true))
			window.removeEventListener('offline', () => setOnline(false))
		}
	}, [])

	return <>{isOnline ? <FiWifi /> : <FiWifiOff />}</>
}

export default StatusNet
