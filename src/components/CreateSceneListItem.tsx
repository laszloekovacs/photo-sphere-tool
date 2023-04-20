import React, { useEffect, useState } from 'react'

const CreateSceneListItem = ({ item, active }) => {
	const { key: label, value: url } = item

	return (
		<li className='aspect-video h-[100] w-[100]'>
			<p>{label}</p>
			<img src={url} />
		</li>
	)
}

export default CreateSceneListItem
