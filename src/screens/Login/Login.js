import React from 'react'
import './Login.scss'
import NajotLogo from '../../assets/images/najottalim-logo.png'
import LoginForm from '../../components/LoginForm/LoginForm'

function Login() {
	return (
		<main className='login'>
			<img
				className='login__logo-img'
				src={NajotLogo}
				alt='Najot ta`lim logo'
				width='250'
				height='250'
			/>

			<LoginForm />
		</main>
	)
}

export default Login
