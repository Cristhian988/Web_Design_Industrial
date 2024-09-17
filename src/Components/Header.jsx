import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const handleShowNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              Sec<span>tt</span>re
            </a>
          </div>
          <div
            className={`nav__menu__btn ${navbar && "active"}`}
            onClick={handleShowNavbar}
          >
            {navbar ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </div>
        </div>
        <ul className={`nav__links ${navbar && "active"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#article">Articles</a>
          </li>
          <li>
            <a href="#client">Clients</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="nav__btns">
          <button className="btn">Get A Quote</button>
        </div>
      </nav>

      <div className="section__container header__container" id="home">
        <p>INDUSTRIAL</p>
        <h1>We Provide Best Industrial Service</h1>
        <div className="header__flex">
          <div className="header__card">
            <span>
              <i className="ri-store-fill"></i>
            </span>
            <div>
              <h5>Consectetur</h5>
              <h4>Production</h4>
            </div>
          </div>
          <div className="header__card">
            <span>
              <i className="ri-building-fill"></i>
            </span>
            <div>
              <h5>Consectetur</h5>
              <h4>Industrial</h4>
            </div>
          </div>
          <div className="header__card">
            <span>
              <i className="ri-stackshare-line"></i>
            </span>
            <div>
              <h5>Consectetur</h5>
              <h4>Construction</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
