import React from 'react'
import './MiniSideBar.scss'
import { NavLink } from 'react-router-dom'
import IconNavHome from '../Lib/Svg/IconNavHome'

function MiniSideBar() {
	return (
		<nav className='mini-sidebar'>
			<ul className='mini-sidebar__list'>
				<li className='mini-sidebar__item'>
					<NavLink
						className='mini-sidebar__link'
						activeClassName='mini-sidebar__link--active'
						to='/'
						exact>
						<IconNavHome />
					</NavLink>
				</li>
				<li className='mini-sidebar__item'>
					<NavLink
						className='mini-sidebar__link'
						activeClassName='mini-sidebar__link--active'
						to='/groups'>
						<IconNavHome />
					</NavLink>
				</li>
				<li className='mini-sidebar__item'>
					<NavLink
						className='mini-sidebar__link'
						activeClassName='mini-sidebar__link--active'
						to='/teachers'>
						<IconNavHome />
					</NavLink>
				</li>
			</ul>
			<NavLink
				className='mini-sidebar__link mini-sidebar__link--settings'
				activeClassName='mini-sidebar__link--active'
				to='/settings'>
				<IconNavHome />
			</NavLink>
		</nav>
	)
}

export default MiniSideBar
