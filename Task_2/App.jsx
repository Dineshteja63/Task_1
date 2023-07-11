import React from 'react'
import Navbar from './Navbar'
import OrganizationStructure from './OrganizationStructure'
import Configurations from './Configurations'
import Reports from './Reports'
import ETL from './ETL'
import Footer from './Footer'
import ProgressBar from './ProgressBar'



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {
  return (
    <>
        <Router>
    <Navbar />
    <Routes>
      <Route path='/organizationstructure' element={OrganizationStructure}></Route>
      <Route path='/configurations' element={Configurations}></Route>
      <Route path='/reports' element={Reports}></Route>
      <Route path='/etl' element={ETL}></Route>
    </Routes>
    </Router>  
    <ProgressBar />
    <Footer />
    </>  
  )
}

export default App