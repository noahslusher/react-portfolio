import React from 'react'
import profilePic from '../../assets/profile/Profile-photo.png'


function About() {
 return (
  <section>
   <img src={profilePic} alt="photo of Noah Slusher"/>
   <p> My name is Noah Slusher. I am a full stack web developer.
   </p>
  </section>
 )
}

export default About