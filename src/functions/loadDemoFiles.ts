import filelist from './_filelist.json'
import { cacheSet } from '../functions/cache'

const defaultFetcher = (url: string) => fetch(url).then((r) => r.blob())
type Fetcher = (url: string) => Promise<Blob>

/* load the files listed in the json */
export const loadDemoFiles = async (fetcher?: Fetcher) => {
	try {
		fetcher = fetcher || defaultFetcher

		console.log('loading files: ', filelist)

		for (const file of filelist) {
			const data = await fetcher(file)
			await cacheSet(file, data)
			console.log(`Loaded ${file}`)
		}
	} catch (error) {
		console.log(error)
	}
}
