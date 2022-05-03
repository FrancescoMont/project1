import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar'
import { Favourites } from './Favourites'
import Games from './Games'
import Platforms from './Platforms'
import { Result } from '../models/Games'


export default function Home() {
  return (
    <>
        <ResponsiveAppBar />
        <Routes>
            <Route path='games' element={<><Outlet /><Games /></>}></Route>

            <Route path='Platforms' element={<><Outlet /><Platforms/></>}></Route>

            <Route path='Favourites' element={<Favourites index={0} isSelected={false} />}></Route>

        </Routes>
    
    </>
  )
}
