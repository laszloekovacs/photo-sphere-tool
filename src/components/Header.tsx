import React from 'react'
import { reset } from '../functions/reset'

const Header = () => {
	const actions = [
		{ name: 'import', action: () => {} },
		{ name: 'export', action: () => {} },
		{ name: 'reset', action: reset }
	]

	return (
		<div className='flex flex-row border-b border-neutral'>
			{actions.map((item) => (
				<button
					onClick={() => item.action()}
					className='p-2 first:pl-0 last:pr-0'
					key={item.name}>
					{item.name}
				</button>
			))}
		</div>
	)
}

export default Header
