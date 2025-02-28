import React from 'react'

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent top-fixed ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">{props.Navbar}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Home}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Login}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.ContactUs}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Profile}</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar