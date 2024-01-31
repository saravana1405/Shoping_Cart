import React from 'react';
import './App.css';
import {DataProvider} from './context/DataContext'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <>
      <DataProvider>
         <Routes>
           <Route path='/' element={<Home />}/>
         </Routes>

      </DataProvider>
    </>
  );
}

export default App;
