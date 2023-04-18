import { Provider } from 'react-redux'

import { store } from './store'
import Layout from './components/Layout'

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Layout />
			</Provider>
		</div>
	)
}

export default App
