import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container-fluid'>
       <div className='container'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light pb-3 ">
       <Link to='/' className="navbar-brand" href="#">Omar</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i className="fas fa-bars text-white"></i>
       </button>
     
       <div className="collapse navbar-collapse " id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <Link to='/' className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
           </li>
           <li className="nav-item">
             <Link to='about' className="nav-link" href="#">about</Link>
           </li>
           <li className="nav-item">
           <Link to='project' className="nav-link" href="#">project</Link>
         </li>
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
               Dropdown
             </a>
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <Link to='blog' className="dropdown-item text-dark bg-info" href="#">blog</Link>
               <Link to='blog/test' className="dropdown-item text-dark bg-info" href="#">testmonial</Link>
                </div>
           </li>
           <li className="nav-item">
             <Link to='service' className="nav-link">service</Link>
           </li>
           <li className="nav-item">
           <Link to='contact' className="nav-link">contact</Link>
         </li>
         </ul>
         

       </div>
     </nav>
       </div>
    </div>
  )
}

export default Navbar