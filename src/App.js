import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'
import Resume from './components/Resume'
import Modal from './components/Modal'
import Footer from './components/Footer'



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
      <Footer></Footer>

    </div>
  );
}

export default App;
