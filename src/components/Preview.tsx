import { Viewer } from '@photo-sphere-viewer/core'
import localforage from 'localforage'
import React, { useEffect, useRef } from 'react'

const Preview = () => {
	const viewRef = useRef<Viewer | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		localforage.getItem('hangar.jpg', (err, value) => {
			if (!value || err) {
				console.log(err)
				return
			}
			viewRef.current = new Viewer({
				container: divRef.current as HTMLElement,
				panorama: URL.createObjectURL(value as Blob)
			})
		})

		return () => {
			viewRef.current?.destroy()
		}
	}, [])

	/* needs explicit sizing */
	return <div ref={divRef} className='h-[400px] w-[500px]'></div>
}

export default Preview
