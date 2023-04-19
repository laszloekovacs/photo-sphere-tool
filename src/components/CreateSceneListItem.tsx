import React, { useEffect, useState } from 'react'

type Props = {
	id: string
	onClick?: (id: string) => void
	value: Blob
	outlined?: boolean
}

const CreateSceneListItem = ({ id, onClick, value, outlined }: Props) => {
	const [image, setImage] = useState<string>('')

	useEffect(() => {
		const url = URL.createObjectURL(value)

		setImage(url)

		return () => {
			URL.revokeObjectURL(url)
			setImage('')
		}
	}, [value])

	if (!image)
		return (
			<li>
				<p>loading</p>
			</li>
		)

	return (
		<li
			onClick={() => onClick?.(id)}
			className={outlined ? 'border border-red-800' : 'border-none'}>
			<p>{id}</p>
			<img src={image} className='h-24 w-24' />
		</li>
	)
}

export default CreateSceneListItem
