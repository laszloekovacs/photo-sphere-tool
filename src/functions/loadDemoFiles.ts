import filelist from '../../public/filelist.json'
import { cacheGetUrl, cacheSet } from '../functions/cache'

const defaultFetcher = (url: string) => fetch(url).then((r) => r.blob())
type Fetcher = (url: string) => Promise<Blob>

/* load the files listed in the json */
export const loadDemoFiles = async (fetcher?: Fetcher) => {
	try {
		fetcher = fetcher || defaultFetcher

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
