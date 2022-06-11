import React from 'react'
import profilePic from '../../assets/profile/Profile-photo.png'


function About() {
 return (
  <section className="my-5">
   <h1 id="about">Who is Noah Slusher?</h1>
   <img src={profilePic} id="profile-img" className="my-2" alt="photo of Noah Slusher"/>
   <p> My name is Noah Slusher. I am a full stack web developer.
   </p>
  </section>
 )
}

export default About