import React from 'react'

type Props = {
	id: string
	onClick?: (id) => void
	value: Blob
}

const CreateSceneListItem = ({ id, onClick, value }: Props) => {
	const pp = URL.createObjectURL(value)

	return (
		<li onClick={() => onClick?.(id)}>
			<p>{id}</p>
			<img src={pp} className='h-14 w-14' />
		</li>
	)
}

export default CreateSceneListItem
