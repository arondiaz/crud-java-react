import React from 'react'
import "./App.css"
import ListEmployees from './components/listEmployees'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container-app'>

      <ListEmployees/>
    </div>
    </>
  )
}

export default App