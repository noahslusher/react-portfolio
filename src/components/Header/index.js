import React, { useEffect } from 'react'

function Header(props) {
 const {
  aboutSelected,
  setAboutSelected
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
     <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
       <span onClick={() => setAboutSelected(true)}>About Me</span>
      </li>
      <li className="">
       <a data-testid="about" href="#contact-form" onClick={() => setAboutSelected(false)}>
        Contact Me
       </a>
      </li>
      <li className='mx-2'>
       <a data-testid="portfolio" href="#mywork" onClick={() => setAboutSelected(false)}>
        Recent Work
       </a>
      </li>
      <li className="mx-2">
       <a data-testid="resume" href="#resume" onClick={() => setAboutSelected(false)}>
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