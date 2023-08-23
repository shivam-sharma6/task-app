import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Index from './components'
import Add from './components/add'
import Navbar from './components/navbar'
import WorldMap from './components/data'
import WorldGraph  from "./components/graph";



const MainRouter = () => {
  return (
    
      <Router>
        <div>
            <Navbar/>
        <Routes>
           <Route path='/' element={<Index/>}/>
           <Route path='/add' element={<Add/>}/> 
           <Route path='/edit/:key' element={<Add/>}/> 
           <Route path='/worldmap' element={<WorldMap/>}/>
           <Route path='/worldgraph' element={<WorldGraph/>}/>

        </Routes>
        </div>
      </Router>
    
  )
}

export default MainRouter
