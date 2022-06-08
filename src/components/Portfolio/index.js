import React, { useState } from 'react'
import Modal from '../Modal'

const Portfolio = ({ category }) => {
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [currentPhoto, setCurrentPhoto] = useState()

 const [photos] = useState([
  {
    name: 'Hike-Buddy',
    category: 'works',
    description: 'An application that allows users to find locals in their area to hike with. It employs Handlebars.js, Node.js, MySQL, Express.js, Socket.io, and Heroku for deployment.',
    repo: 'https://github.com/emilypape/hike-buddy',
    link: ' https://still-shore-87425.herokuapp.com/'
  },
  {
    name: 'Park Advisor',
    category: 'works',
    description: 'A front-end application that uses APIs to allow the user to plan a trip to any national park in the United States. It utilizes JavaScript, HTML, CSS, APIs, and Tailwinds.',
    repo: 'https://github.com/noahslusher/NP-trip-planner',
    link: 'https://noahslusher.github.io/NP-trip-planner/'
  },
  {
    name: 'Weather Dashboard',
    category: 'works',
    description: 'A weather forecasting application that uses weather and geolocation APIs to give the user a weather forecast based on the desired location. It utilizes JavaScript, HTML, CSS, 3rd-party APIs, and JQuery.',
    repo: 'https://github.com/noahslusher/weather-dashboard',
    link: 'https://noahslusher.github.io/weather-dashboard/'
  },
  {
    name: 'Tech-er',
    category: 'works',
    description: 'An interactive application that allows the users to interact with other users and see blog-style posts that they can like and comment on. It uses an MVC paradigm and utilizes, Handlebars.js, JavaScript, MySQL, and RESTful APIs.',
    repo: ' https://github.com/noahslusher/Tech-blog',
    link: 'https://immense-oasis-15835.herokuapp.com/'
  },
  {
    name: 'Social Network APIs',
    category: 'works',
    description: 'A back-end application that utilizes NoSQL, MongoDB, Mongoose, Express.js, and Node.js to build the back-end for a fictional front end social network website. It creates RESTful APIs that are shown using Insomnia.',
    repo: 'https://github.com/noahslusher/social-network',
    link: 'https://vimeo.com/715097625'
  },
  {
    name: 'Note Planner ',
    category: 'works',
    description: 'A front-end and server side application that allows the user to add, save, and delete notes. It uses Express.js to run the server. It also utilizes Node.js, JavaScript, HTML, and CSS for the front-end.',
    repo: 'https://github.com/noahslusher/note-taker',
    link: 'https://sheltered-shelf-73743.herokuapp.com/notes'
  },
])

const currentPhotos = photos.filter(photo => photo.category === category)

// const toggleModal = (image, i) => {
//  setCurrentPhoto({ ...image, index: i })
//  setIsModalOpen(!isModalOpen)
//}
 return (
  // <div>
  //  {isModalOpen && (
  //   <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
  //  )}
  
  // <div id="mywork" className='flex-row'>
  //  {currentPhotos.map((image, i) => (
  //   <img 
  //   src={require(`../../assets/works/1.png`).default}
  //   alt={image.name}
  //   className="img-thumbnail mx-1"
  //   // onClick={() => toggleModal(image, i)}
  //   key={image.name}
  //   />
  //  ))}
  // </div>
  // </div>

  <div>
   <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/works/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  </div>
 )
}

export default Portfolio