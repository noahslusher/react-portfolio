import React from 'react'

function Resume() {
 return (
  <section id="resume">
   <h1>Noah V. Slusher</h1>
   <h5>7537 S 2160 E Cottonwood Heights, UT 84121 · <a href="tel:7026067055">(702) 606-7055  ·</a><a href="mailto:n.v.slusher@gmail.com"> n.v.slusher@gmail.com</a></h5>

   <br/>

   <div>
    <h2>Education and Academic Recognition</h2>
    <div>
    <h4>Southern Methodist University</h4>
    <h5>GPA: 3.81/4.0 Cum Laude</h5>
    <p>B.S. Biological Sciences</p>
    <p>Applied Physiology, minor</p>
     </div>
     <br/>
     <div id="programming">
      <h2>Programming Experience</h2>
      <h3>University of Utah Full-Stack Coding Bootcamp</h3>
      <p>A 6-month intensive coding bootcamp that equips students with a wide variety of skillsets to create full-stack applications from the ground up</p>
      <ul>
      <h3>Skills learned:</h3>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>JQuery</li>
      <li>BootStrap</li>
      <li>Express.js</li>
      <li>Node.js</li>
      <li>MySQL</li>
      <li>Sequelize</li>
      <li>Test Driven Development</li>
      <li>Object Oriented Programmming</li>
      <li>Model View Controller Paradigm</li>
      <li>NoSQL</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
      <li>React</li>
      <li>RESTful APIs</li>
      </ul>
     </div>
     <br/>
     <div id="employment">
      <h2>Employment Experience</h2>
      <div>
       <h3>Soft Tissue Manual Therapist</h3>
       <h5>Kinetik Chain</h5>
      </div>
      <div>
       <h3>Laboratory Assistant</h3>
       <h5>University of Utah Pediatric Critical Care</h5>
      </div>
      <div>
       <h3>Personal Trainer</h3>
       <h5>F45 Training</h5>
      </div>
     </div>
    <br/>
    <br/>
     <div>
      <h2>Volunteering Experience</h2>
      <div>
       <h3>Clinical Volunteer</h3>
       <h5>The 4th Street Clinic</h5>
      </div>
     </div>
   </div>

  </section>
 )
}

export default Resume