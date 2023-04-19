import { Provider } from 'react-redux'

import { store, persistor } from './store'
import Layout from './components/Layout'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout />
				</PersistGate>
			</Provider>
		</>
	)
}

export default App
