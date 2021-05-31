import React from 'react'
import './LoginForm.scss'

function LoginForm() {
	return (
		<form className='login__form' autoComplete='off' spellCheck='false'>
			<h2 className='login__heading'>Kirish</h2>

			<input
				className='login__input'
				type='text'
				name='username'
				placeholder='Login'
			/>
			<input
				className='login__input'
				type='password'
				name='password'
				placeholder='Parol'
			/>

			<button className='login__submit-btn' type='submit'>
				Kirish
			</button>
		</form>
	)
}

export default LoginForm
