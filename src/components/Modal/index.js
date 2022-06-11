import React from 'react'
import Portfolio from '../Portfolio'
import logo from '../../assets/logo.svg'

const Modal = ({ onClose, currentPhoto }) => {
 const { name, description, index, link, repo } = currentPhoto;

 return (
  <div className="modalBackdrop">
   <div className="modalContainer">
    <h3 className="modalTitle"> </h3>
    <img 
    src={require(`../../assets/works/${index}.jpg`)}
    alt="current category"
    />
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link} target="_blank">See {name} in action here!</a>
    <a href={repo} target="_blank">Repository Link</a>
    <button type="button" onClick={onClose}>
     <img src={logo} className='App-logo'></img>
    </button>
   </div>
  </div>
 )
}

export default Modal