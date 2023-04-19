import React from 'react'

const DebugView = ({ data }) => {
	return (
		<div className='border border-dotted border-pink-500'>
			<pre className='bg-neutral-500'>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export default DebugView
