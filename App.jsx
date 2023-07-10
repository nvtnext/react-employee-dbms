import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hm from "./Crud/Hm"
import Cr from './Crud/Cr'
import Us from './Crud/Us'
import Ed from './Crud/Ed'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Hm/>
        <Routes>
            <Route path='/' element={<Cr/>}/>
            <Route path='/us' element={<Us/>}/>
            <Route path='/ed/:index' element={<Ed/>}/>


        </Routes>
        
        </BrowserRouter>

    </div>
  )
}

export default App