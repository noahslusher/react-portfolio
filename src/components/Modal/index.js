import React from 'react'
import Portfolio from '../Portfolio'
import logo from '../../assets/logo.svg'
import gitHub from './logo.svg'
import linkLogo from './link-logo.svg'

const Modal = ({ onClose, currentPhoto }) => {
 const { name, description, index, link, repo } = currentPhoto;

 return (
  <div className="modalBackdrop">
   <div className="modalContainer">
    <h1 className="modalTitle"> {name} </h1>
    <img 
    src={require(`../../assets/works/${index}.jpg`)}
    alt="current category"
    />
    <p>{description}</p>
    <span id="logo-container">
    <button className="link-buttons">
    <a href={link} target="_blank"><img id="link-logo"src={linkLogo}></img></a>
    </button>
    <button className="link-buttons">
    <a href={repo} target="_blank"><img id="github-logo"src={gitHub}></img></a>
    </button>
    </span>
    <br/>
    <div id='modal-btn'>
    <button id="close-btn"type="button" onClick={onClose}>
     <img src={logo} className='App-logo'></img>
    </button>
    </div>
   </div>
  </div>
 )
}

export default Modal