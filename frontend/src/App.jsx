import React from 'react'
import "./App.css"
import ListEmployees from './components/listEmployees'

const App = () => {
  return (
    <div className='container-app'>
      <h1>CRUD REACT JAVA</h1>
      <ListEmployees/>
    </div>
  )
}

export default App