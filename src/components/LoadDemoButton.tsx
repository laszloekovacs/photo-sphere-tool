import React from 'react'
import filelist from './filelist.json'
import { cacheGetUrl, cacheSet } from '../functions/fileCache'

const fetcher = (url: string) => fetch(url).then((r) => r.blob())

/* load assets from ./public, uploaded with the project, filenames are in the included json  */
const LoadDemoButton = () => {
	const handleClick = async () => {
		try {
			console.log('loading files: ', filelist)

			for (const file of filelist) {
				// check if we already have the file in cache
				const cached = await cacheGetUrl(file)

				if (cached != undefined) {
					console.log(`Already loaded ${file}`)
					continue
				}

				const data = await fetcher(file)
				cacheSet(file, data)
				console.log(`Loaded ${file}`)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<button onClick={handleClick}>Load Demo</button>
		</div>
	)
}

export default LoadDemoButton
