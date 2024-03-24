import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './assets/Screens/Home/Home'
import Room from './assets/Screens/Room/Room'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/room/:roomId' element={<Room/>}></Route>
      </Routes>
    </div>
  )
}

export default App