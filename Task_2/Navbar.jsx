import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">ampleLogic</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 p-2 mx-auto mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/organizationstructure">Organization Structure</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/configurations">Configurations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/reports">Reports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/etl">ETL</Link>
        </li>

        
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
        <i class="fas fa-bars"></i>
        <ul class="nav-item">
        <button type="button" class="btn btn-primary" to="/bookademo">Book A Demo</button>
        </ul>
        <ul class="nav-item">
        <button type="button" class="btn btn-primary" to="/signin">Sign In</button>
        </ul>
        <ul class="nav-item">
        <button type="button" class="btn btn-primary" to="/tryforfree">Try For Free</button>
        </ul>

       
      
    </div>
  </div>
</nav>
  )
}

export default Navbar1