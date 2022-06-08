import React, { useEffect } from 'react'

function Header() {
 return (
  <header className="flex-row px-1">
   <span>
    <h1>
     <a data-testid="link" href="/">
      Noah Slusher</a>
      </h1>
    <nav>
     <div>About Me</div>
     <div>My Works</div>
     <div>Contact</div>
    </nav>
   </span>
   
  </header>
 )
}

export default Header