import { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import {useAppDispatch, useAppSelector } from './hooks/index'
import type { RootState } from './store';
import CryptoPriceTable from './components/CryptoPriceTable/CryptoPriceTable';

function App() {
  const currentMode = useAppSelector((state : RootState) => state.theme.mode);
 
  return (
    <>
     <NavBar/>
     <CryptoPriceTable/>
    </>
  )
}

export default App
