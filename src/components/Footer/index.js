import React from 'react'
import instagramLogo from '../../assets/icons/instagram.svg'
import githubLogo from '../../assets/icons/github.svg'
import linkedinLogo from '../../assets/icons/linkedin.svg'

function Footer() {
 return (
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
 )
}

export default Footer