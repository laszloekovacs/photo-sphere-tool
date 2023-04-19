import React, { useEffect, useState } from 'react'
import Preview from './Preview'
import { useSelector } from 'react-redux'
import { cacheGetUrl } from '../cache/fileCache'

const getActiveScene = (state: State) =>
	state.scenes.find((scene) => scene.id === state.editor.activeSceneId)

/* convert scene into something we can render */
const PreviewContainer = () => {
	const scene = useSelector(getActiveScene)
	const [data, setData] = useState<any>(null)

	useEffect(() => {
		if (!scene) return
		cacheGetUrl(scene.id).then((url) => {
			setData({
				panorama: url,
				defaultYaw: 0,
				defaultPitch: 0,
				/* correct yaw, in radians */
				sphereCorrection: {
					pan: 0,
					tilt: 0,
					roll: 0
				}
			})
		})
	}, [scene])

	return <div>{data && <Preview data={data} />}</div>
}

export default PreviewContainer
