import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Modal from './components/Modal'

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  
  return (
    <div>
      <Header>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Header>
      <main>
        {!contactSelected ? (
          <>
        <About></About>
        </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
