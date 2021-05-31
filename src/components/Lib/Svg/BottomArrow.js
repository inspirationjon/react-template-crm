import React from 'react'

function BottomArrow({ className }) {
	return (
		<svg
			className={className}
			width={8}
			height={5}
			viewBox='0 0 8 5'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7 1L4 4L1 1'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default BottomArrow
