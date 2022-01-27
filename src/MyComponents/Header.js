import React from 'react';

export default function Header() {
  return <div className="mar">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link s b" aria-current="page" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link s b" href="#">Loyalty</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active s b" >Events</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn " type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg></button>
      </form>
    </div>
  </div>
</nav>
  </div>;
}
