import './App.scss'
import Home from './screens/Home/Home'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

import useBurger from './hooks/useBurger'
import MiniSideBar from './components/MiniSideBar/MiniSideBar'

function AuthenticatedApp() {
	const [burger] = useBurger()

	return (
		<div
			className='authenticatedapp'
			style={{ paddingLeft: burger ? '80px' : '225px' }}>
			<Header />

			<div className='site__content'>
				{burger ? <MiniSideBar /> : <SideBar />}

				<Home />
			</div>
		</div>
	)
}

export default AuthenticatedApp
