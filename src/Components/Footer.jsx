import MediaImg1 from '../assets/media-1.jpg'
import MediaImg2 from '../assets/media-2.jpg'
import MediaImg3 from '../assets/media-3.jpg'
import MediaImg4 from '../assets/media-4.jpg'
import MediaImg5 from '../assets/media-5.jpg'
import MediaImg6 from '../assets/media-6.jpg'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>About Us</h4>
          <p>
            Founded on the principles of integrity and a vision for advancing
            industrial solutions, we have evolved into a trusted partner for
            businesses seeking cutting-edge products and unparalleled support.
          </p>
          <button className="btn">Contact Us</button>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Social Media</h4>
          <div className="footer__media">
            <img src={MediaImg1} alt="media" />
            <img src={MediaImg2} alt="media" />
            <img src={MediaImg3} alt="media" />
            <img src={MediaImg4} alt="media" />
            <img src={MediaImg5} alt="media" />
            <img src={MediaImg6} alt="media" />
          </div>
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>
    </footer> 
  )
}
