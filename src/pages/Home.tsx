import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar'
import Games from './Games'
import Platforms from './Platforms'
import { SingleGame } from './SingleGame'


export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='games' element={<><Outlet /><Games /></>}>
        <Route path=':id' element={<><Outlet /><SingleGame /></>}>
       </Route>
        </Route>
        <Route path='Platforms' element={<><Outlet /><Platforms /></>}></Route>
      </Routes>
    </>
    
  )
}
