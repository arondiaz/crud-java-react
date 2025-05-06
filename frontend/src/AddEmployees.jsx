import React from 'react'
import Navbar from './components/Navbar'
import EmployeeForm from './components/EmployeeForm'

const AddEmployees = () => {
  return (

    <>
    <Navbar/>
    <div className='container-app'>

    <EmployeeForm/>
    </div>
    </>
  )
}

export default AddEmployees