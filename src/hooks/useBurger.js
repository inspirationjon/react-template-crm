import React from 'react'
import { Context } from '../context/Hamburger'

const useBurger = (setterOnly) => {
	const ctx = React.useContext(Context)

	return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState]
}

export default useBurger
