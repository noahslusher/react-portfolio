import React, { useEffect } from 'react'

function Header(props) {
 const {
  contactSelected,
  setContactSelected
 } = props
 return (
  <header>
   <div className="header flex-row">
    <h1 className='flex-row'>
     <a data-testid="link" href="/">
      Noah Slusher
      </a>
      </h1>
    <nav>
     <ul className="flex-row">
      <li className="">
       <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
        About Me
       </a>
      </li>
      <li className={`mx-2 ${contactSelected && 'navActive'}`}>
       <span onClick={() => setContactSelected(true)}>Contact Me</span>
      </li>
      <li className='mx-2'>
       <a data-testid="portfolio" href="#mywork" onClick={() => setContactSelected(false)}>
        Recent Work
       </a>
      </li>
      <li className="mx-2">
       <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
        Resume
       </a>
      </li>
     </ul>
    </nav>
   </div>
   
  </header>
 )
}

export default Header