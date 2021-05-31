import './App.scss'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnauthenticatedApp from './UnauthenticatedApp.js'
import useToken from './hooks/useToken'
import { Provider } from './context/Hamburger'

function App() {
	const [token] = useToken()
	if (token) {
		return (
			<Provider>
				<AuthenticatedApp />
			</Provider>
		)
	} else {
		return <UnauthenticatedApp />
	}
}

export default App
