
import React from 'react'
import { Link } from "react-router-dom";




const Navbar = () => {
  
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">NewsDonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                <li className="nav-item"><Link className="nav-link" to="/business" style={{color: 'lightgreen'}}>Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color: 'lightblue'}}>Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general" style={{color: 'white'}}>General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health" style={{color: 'red'}}>Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science" style={{color: 'yellow'}}>Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports" style={{color: 'violet'}}>Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology" style={{color: 'orange'}}>Technology</Link></li>
                
                
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  
}

export default Navbar