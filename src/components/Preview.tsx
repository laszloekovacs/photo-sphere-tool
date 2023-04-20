import { Viewer } from '@photo-sphere-viewer/core'
import React, { useEffect, useRef, useState } from 'react'
import '../overrides.css'

const Preview = ({ data }) => {
	const viewRef = useRef<Viewer | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)

	if (!data) {
		console.log('no data')
		return
	}

	useEffect(() => {
		/* creation */
		const container = { container: divRef.current as HTMLElement }
		viewRef.current = new Viewer({ ...container, ...data })

		/* add aim point, make it permanent */
		viewRef.current.overlay.show({
			title: '',
			dissmisable: false
		})

		/* cleanup */
		return () => {
			viewRef.current?.destroy()
		}
	}, [data])

	/* needs explicit sizing */
	return (
		<div
			id='view'
			ref={divRef}
			className='isolate -z-50 h-full w-full border border-neutral'></div>
	)
}

export default Preview
