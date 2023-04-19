import { Viewer } from '@photo-sphere-viewer/core'
import localforage from 'localforage'
import React, { useEffect, useRef, useState } from 'react'

const Preview = () => {
	const viewRef = useRef<Viewer | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)

	const [scene, setScene] = useState<Blob | null>(null)

	useEffect(() => {
		if (scene) return
		localforage.getItem('pano/hangar.jpg').then((value) => {
			setScene(value as Blob)
		})
	}, [])

	useEffect(() => {
		if (!scene) return

		viewRef.current = new Viewer({
			container: divRef.current as HTMLElement,
			panorama: URL.createObjectURL(scene)
		})

		return () => {
			viewRef.current?.destroy()
		}
	}, [scene])

	/* needs explicit sizing */
	return <div ref={divRef} className='h-[400px] w-[500px]'></div>
}

export default Preview
