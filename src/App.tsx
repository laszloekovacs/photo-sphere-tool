import { Provider } from 'react-redux'

import { store, persistor } from './store'
import Layout from './components/Layout'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout />
				</PersistGate>
			</Provider>
		</div>
	)
}

export default App
