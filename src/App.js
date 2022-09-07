import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './assets/styles/fonts.scss';
import './assets/styles/general.scss';

import Layout from './components/layouts/Layout'
import Home from './components/pages/Home/Home'
import Error from './components/pages/Error/Error'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
