import React from 'react'
import profilePic from '../../assets/profile/Profile-photo.png'


function About() {
 return (
  <section id="about-me" className="my-5">
   <h1 id="about">Who is Noah Slusher?</h1>
   <img src={profilePic} id="profile-img" className="my-2" alt="photo of Noah Slusher"/>
   <p> 
    I started my coding journey 6 months ago after deciding not to pursue a life of medicine. I am really happy I made this decision because I never knew how much I would enjoy coding! I look forward to mastering more skills and continuing to learn more every day. Finishing my coding boot camp is my first of many steps to becoming an elite-level programmer. Please take a look at some of my recent works and don't hesitate to reach out with any questions.
   </p>
   <p>
    Cheers!
   </p>
   <p>
    Noah
   </p>
  </section>
 )
}

export default About