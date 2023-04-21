import React, { useEffect, useState } from 'react'

const CreateSceneListItem = ({ item, active, onAdd }) => {
	const { key, value: url } = item

	/* remove pano/ from beginning, and .jpg at the end */
	const label = key.replace('pano/', '').replace('.jpg', '')

	/* check if we have key in active list */
	const isActive = active.includes(key)

	return (
		<li>
			<div
				onClick={() => onAdd(key)}
				className={
					'border-2 border-solid p-2' +
					' ' +
					(isActive ? 'border-pink-500' : 'border-transparent')
				}>
				<p>{label}</p>
				<img src={url} />
			</div>
		</li>
	)
}

export default CreateSceneListItem
