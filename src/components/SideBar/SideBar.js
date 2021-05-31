import React from 'react'
import './SideBar.scss'
import { NavLink } from 'react-router-dom'
import IconNavHome from '../Lib/Svg/IconNavHome'

function SideBar() {
	return (
		<nav className='sidebar'>
			<ul className='sidebar__list'>
				<li className='sidebar__item'>
					<NavLink
						className='sidebar__link'
						activeClassName='sidebar__link--active'
						to='/'
						exact>
						<IconNavHome /> Home
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						className='sidebar__link'
						activeClassName='sidebar__link--active'
						to='/groups'>
						<IconNavHome /> Guruhlar
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						className='sidebar__link'
						activeClassName='sidebar__link--active'
						to='/teachers'>
						<IconNavHome /> O’qituvchilar
					</NavLink>
				</li>
			</ul>
			<NavLink
				className='sidebar__link sidebar__link--settings'
				activeClassName='sidebar__link--active'
				to='/settings'>
				<IconNavHome /> Sozlamalar
			</NavLink>
		</nav>
	)
}

export default SideBar
