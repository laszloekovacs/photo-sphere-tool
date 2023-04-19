import { Viewer } from '@photo-sphere-viewer/core'
import React, { useEffect, useRef, useState } from 'react'
import { cacheGetUrl } from '../cache/fileCache'

const Preview = ({ data }) => {
	const viewRef = useRef<Viewer | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!data) {
			console.log('no data')
			return
		}

		const container = { container: divRef.current as HTMLElement }
		viewRef.current = new Viewer({ ...container, ...data })

		return () => {
			viewRef.current?.destroy()
		}
	}, [data])

	/* needs explicit sizing */
	return <div ref={divRef} className='h-[400px] w-[500px]'></div>
}

export default Preview
