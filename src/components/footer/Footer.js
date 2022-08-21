import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Your Name</h1>
            <p>Based in Your City</p>
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
        </div>
        {/* colocando al autor del portafolio */}
        <div className='footer-sns'>
            <div className='design-by'>
                Design By "Your Name"
            </div>
            {/* Aca colocando las redes sociales para que te contacten-Video: 57:15 */}
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/jairo-rodrigo-manchay-perez-8170631b2/' target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://www.tiktok.com/' target="_blank" rel='noreferrer'>
                    <i className='fab fa-tiktok TikTok'></i>
                </a>
                <a href='https://github.com/JairoManchay' target="_blank" rel='noreferrer'>
                    <i className='fab fa-github GitHub' rel='noreferrer'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer