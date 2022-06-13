import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'
import Resume from './components/Resume'
import Modal from './components/Modal'
import instagramLogo from './assets/icons/instagram.svg'
import githubLogo from './assets/icons/github.svg'
import linkedinLogo from './assets/icons/linkedin.svg'


function App() {
  const [aboutSelected, setAboutSelected] = useState(false)
  
  return (
    <div>
      <Header 
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        >
      </Header>
      <main>
        {!aboutSelected ? (
          <>
        <MyWork></MyWork>
        <Resume></Resume>
        <Contact></Contact>
        </>
        ) : (
          <About></About>
        )}
      </main>
      <footer>
        <div id="footer">
        <div class="social-icon">
                    <a href="https://www.instagram.com/slush_daddy/" target="_blank"><img src={instagramLogo} alt="instagram logo"/></a>
                </div>
                <div class="social-icon">
                    <a href="https://www.linkedin.com/in/noah-slusher/" target="_blank"><img src={linkedinLogo} alt="linkedin logo"/></a>
                </div>
                <div class="social-icon">
                    <a href="https://github.com/noahslusher" target="_blank"> <img src={githubLogo} alt="github logo"/></a>
                </div>
        </div>
        <h5> &copy; Developed by Noah Slusher</h5>
      </footer>

    </div>
  );
}

export default App;
