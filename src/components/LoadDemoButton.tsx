import React from 'react'
import { useAsync } from '../hooks/useAsync'
import filelist from './filelist.json'
import localforage from 'localforage'

const fetcher = (url: string) => fetch(url).then((r) => r.blob())

const base = '/'

/* load assets from ./public, uploaded with the project  */
const LoadDemoButton = () => {
	const handleClick = async () => {
		try {
			console.log('loading files: ', filelist)

			for (const file of filelist) {
				/* check if we already have it loaded */
				const cached = await localforage.getItem(base + file)
				if (cached) {
					console.log(`Already loaded ${file}`)
					continue
				}

				/* load asset */
				const data = await fetcher(file)
				localforage.setItem(file, data)

				console.log(`Loaded ${file}`)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<button onClick={handleClick}>Load Demo Assets</button>
		</div>
	)
}

export default LoadDemoButton
