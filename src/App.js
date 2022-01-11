import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ComponentI from './pages/home/I';
import SomePage from './pages/home/somePage';
import './App.css';

function App() {
  return (
		<Routes>
			<Route path = '/' element={<ComponentI/>}/>
			<Route path = '/somePage' element={<SomePage/>}/>
		</Routes>
	);
}

export default App;
