import React from 'react'
import './Header.scss'
import Hamburger from '../Lib/Svg/Hamburger'
import UserAvatar from '../Lib/Svg/UserAvatar'
import BottomArrow from '../Lib/Svg/BottomArrow'
import HeaderLogo from '../Lib/Svg/HeaderLogo'

import { Link } from 'react-router-dom'
import useBurger from '../../hooks/useBurger'

function Header() {
	const [burger, setBurger] = useBurger()

	function handleToggleHamburger() {
		setBurger((prevValue) => !prevValue)
	}
	return (
		<header className='header'>
			<div
				className='header__right'
				style={{
					maxWidth: burger ? '80px' : '225px',
				}}>
				<button
					className='hamburger'
					type='button'
					onClick={handleToggleHamburger}>
					<Hamburger />
				</button>

				{burger ? null : (
					<Link className='header__logo' to='/'>
						<HeaderLogo />
					</Link>
				)}
			</div>

			<div className='header__main'>
				<input
					className='header__search-input'
					type='search'
					placeholder='O’quvchini qidirish'
					name='user_search'
					autoComplete='off'
				/>

				<button className='user-avatar__btn' type='button'>
					<span className='user-avatar__icon-wrapper'>
						<UserAvatar />
					</span>
					<span className='user-avatar__name'>John Doe</span>
					<BottomArrow className='user-avatar__bottom-arrow' />
				</button>
			</div>
		</header>
	)
}

export default Header
