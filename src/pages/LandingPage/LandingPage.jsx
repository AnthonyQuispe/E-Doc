import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import logo from "../../assets/images/E-Doc.svg";
import navMenu from "../../assets/icons/menu.png";
import searchIcon from "../../assets/icons/search.png";
import doctorIcon from "../../assets/icons/UserIcon.png";
import eDocIcon from "../../assets/images/Doctor.png";
import CovidIcon from "../../assets/icons/CovidIcon.svg";
import MentalHealthIcon from "../../assets/icons/MenthHealthIcon.svg";
import LungIcon from "../../assets/icons/LungIcon.svg";
import SupplimentIcon from "../../assets/icons/SupplimentIcon.svg";
import WhyChooseIcon from "../../assets/images/WhyChooseUsPicture.png";
import CheckMarkIcon from "../../assets/icons/CheckmarkIcon.svg";
import ProfilePic1 from "../../assets/images/ProfilePic1.png";
import ProfilePic2 from "../../assets/images/ProfilePic2.png";
import ProfilePic3 from "../../assets/images/ProfilePic3.png";
import ProfilePic4 from "../../assets/images/ProfilePic4.png";
import ProfilePic5 from "../../assets/images/ProfilePic5.png";
import ProfilePic6 from "../../assets/images/ProfilePic6.png";
import StarIcons from "../../assets/images/Stars.svg";
import Doctor from "../../assets/images/Doc.png";
import RightArrow from "../../assets/icons/RightArrow.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Map from "../../assets/images/Map.png";
import MobileNav from "../../components/MobileNav/MobileNav";

export default function LandingPage() {
  const [success, setSuccess] = useState(false);
  const [mobileNav, openMobileNav] = useState(false);

  const linksArray = [
    { text: "Home", link: "/" },
    { text: "About", link: "/" },
    { text: "Application", link: "/" },
    { text: "History", link: "/" },
  ];

  const doctorArray = [
    { name: "Doctor’s Name" },
    { name: "Dr. William Carter" },
    { name: "Dr. Sophia Bennett" },
    { name: "Dr. Michael Thompson" },
    { name: "Dr. Emma Collins" },
  ];

  const officesArray = [
    { name: "Carter Medical Center " },
    { name: "Bennett Family Clinic" },
    { name: "Thompson Wellness Center" },
    { name: "Collins Pediatric Care" },
    { name: "Wright Women’s Health" },
  ];

  const servicesArray = [
    { service: "24/7", info: "Online Support" },
    { service: "100+", info: "Doctors" },
    { service: "1M+", info: "Active Patients" },
  ];

  function NewsletterSubmitHandle() {
    event.preventDefault();
    setSuccess(true);
  }

  const onClickMobile = () => {
    openMobileNav(!mobileNav);
  };

  return (
    <div className="landing-page">
      <nav className="nav">
        <Link to={"/"} className="link">
          <img src={logo} alt="Logo" className="nav__logo" />
        </Link>
        <ul className="nav__list">
          {linksArray.map((navLink, index) => (
            <Link to={navLink.link} className="nav__link" key={index}>
              <li className="nav__list">{navLink.text}</li>
            </Link>
          ))}
        </ul>
        <div className="nav__button-container">
          <button className="nav__button">Log in</button>
          <button className="nav__button nav__button--blue">Sign Up</button>
        </div>
        <button className="nav__menu" onClick={onClickMobile}>
          <img src={navMenu} className="nav__menu-img" />
        </button>
      </nav>
      {mobileNav && <MobileNav onClickMobile={onClickMobile} />}

      <section className="hero">
        <div className="hero__container">
          <div className="hero__container-left">
            <div className="hero__container-text">
              <h1 className="hero__title">
                Find & Search Your
                <span className="hero__title--blue-text"> Favorite</span> Doctor
              </h1>
              <p className="hero__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Sem velit viverra amet faucibus.
              </p>
            </div>
            <div className="hero__search">
              <div className="hero__search-left-container">
                <img src={doctorIcon} className="hero__search-img" />
                <select className="hero__search-select">
                  {doctorArray.map((doctor, index) => (
                    <option className="hero__search-option" key={index}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
                <select className="hero__search-select hero__search-select--offices ">
                  {officesArray.map((office, index) => (
                    <option className="hero__search-option" key={index}>
                      {office.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="hero__search-button">
                <img className="hero__search-button-img" src={searchIcon} />
              </button>
            </div>
          </div>
          <div className="hero__container-right">
            <div className="hero__search-picture-container">
              <img className="hero__search-picture" src={eDocIcon} />
            </div>
          </div>
        </div>
        <div className="hero__services-container">
          <ul className="hero__services">
            {servicesArray.map((service, index) => (
              <li className="hero__services-list" key={index}>
                <h3 className="hero__services-service">{service.service}</h3>
                <p className="hero__services-info">{service.info}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="choose-us">
        <div className="choose-us-container">
          <h2 className="choose-us__title">Our Consulting Specialists</h2>
          <ul className="choose-us__list">
            <li className="choose-us__list-item">
              <img className="choose-us__list-img" src={CovidIcon} />
              <h3 className="choose-us__list-title">Covid-19 Test</h3>
              <p className="choose-us__list-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </li>
            <li className="choose-us__list-item">
              <img className="choose-us__list-img" src={LungIcon} />
              <h3 className="choose-us__list-title">Heart Lungs</h3>
              <p className="choose-us__list-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </li>
            <li className="choose-us__list-item">
              <img className="choose-us__list-img" src={SupplimentIcon} />
              <h3 className="choose-us__list-title">Suppliment</h3>
              <p className="choose-us__list-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </li>
            <li className="choose-us__list-item">
              <img className="choose-us__list-img" src={MentalHealthIcon} />
              <h3 className="choose-us__list-title">Mental Health</h3>
              <p className="choose-us__list-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </li>
          </ul>

          <div className="choose-us__container">
            <div className="choose-us__container-picture">
              <img
                className="choose-us__picture"
                src={WhyChooseIcon}
                alt="Why Choose Us Picture"
              />
            </div>
            <ul className="choose-us__container-list">
              <h3 className="choose-us__container-title">Why You Choose Us?</h3>
              <li className="choose-us__container-list-item">
                <img
                  className="choose-us__container-list-image"
                  src={CheckMarkIcon}
                />
                <p className="choose-us__container-list-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="choose-us__container-list-item">
                <img
                  className="choose-us__container-list-image"
                  src={CheckMarkIcon}
                />
                <p className="choose-us__container-list-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="choose-us__container-list-item">
                <img
                  className="choose-us__container-list-image"
                  src={CheckMarkIcon}
                />
                <p className="choose-us__container-list-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="choose-us__container-list-item">
                <img
                  className="choose-us__container-list-image"
                  src={CheckMarkIcon}
                />
                <p className="choose-us__container-list-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="choose-us__container-list-item">
                <img
                  className="choose-us__container-list-image"
                  src={CheckMarkIcon}
                />
                <p className="choose-us__container-list-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <p className="choose-us__container-link">Learn More</p>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="about-us__container">
          <h2 className="about-us__title">
            What <span className="about-us__title--blue">Our Member’s </span>{" "}
            Saying About Us
          </h2>
          <p className="about-us__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
            viverra amet faucibus.
          </p>
          <div className="about-us__profile-container">
            <img
              src={ProfilePic1}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <img
              src={ProfilePic2}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <img
              src={ProfilePic3}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <img
              src={ProfilePic4}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <img
              src={ProfilePic5}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <img
              src={ProfilePic6}
              alt="Profile Picture"
              className="about-us__profile-picture"
            />
            <p className="about-us__profile-review"> 100+ Reviews</p>
          </div>
        </div>
        <div className="about-us__review-container">
          <div className="about-us__review-container-top">
            <div className="about-us__review-container-top-left">
              <img
                src={ProfilePic4}
                alt="Profile Picture"
                className="about-us__review-profile"
              />
              <div className="about-us__review-profile-name-container">
                <p className="about-us__review-profile-name">Jane Cooper</p>
                <p className="about-us__review-profile-date">12/4/17</p>
              </div>
            </div>
            <img
              alt="Star Ratings"
              src={StarIcons}
              className="about-us__review-star"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
            viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sem velit viverra amet
            faucibus.
          </p>
        </div>
      </section>
      <section className="future">
        <div className="future__container">
          <div className="future__container-left">
            <h2 className="future__title">
              The Future of
              <span className="future__title--blue"> Quality Health</span>
            </h2>
            <p className="future__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis
              id semper.
            </p>
            <p className="future__link">Learn More</p>
          </div>
          <img className="future__img" src={Doctor} alt="Doctor" />
        </div>
      </section>
      <section className="newsletter">
        {!success ? (
          <div className="newsletter__container">
            <h3 className="newsletter__title"> Subscribe To Our Newsletter</h3>
            <form
              className="newsletter__container-search"
              onSubmit={NewsletterSubmitHandle}
            >
              <input className="newsletter__input" placeholder="Email" />
              <button className="newsletter__button" type="submit">
                <img
                  className="newsletter__img"
                  src={RightArrow}
                  alt="Right arrow Icon"
                />
              </button>
            </form>
          </div>
        ) : (
          <div className="newsletter__container">
            <h3 className="newsletter__title"> Successfully Subscribed</h3>
          </div>
        )}
      </section>
      <footer className="footer">
        <div className="footer__top-container">
          <div className="footer__brand">
            <h4 className="footer__title">E-Doc</h4>
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            </p>
            <p className="footer__description">
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <ul className="footer__social-links">
              <li className="footer__social-item">
                <a
                  href="https://www.facebook.com/"
                  className="footer__social-link"
                >
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link"
                >
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://x.com/" className="footer__social-link">
                  <img
                    src={Twitter}
                    alt="twitter"
                    className="footer__social-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">Useful Links</h4>
            <ul className="footer__link-list">
              <li className="footer__link-item">
                <Link className="footer__link">About Us</Link>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link">Privacy Policy</Link>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link">Our Mission</Link>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link">Our Team</Link>
              </li>
            </ul>
          </div>
          <div className="footer__address">
            <h4 className="footer__title">Address</h4>
            <a href="https://www.google.com/maps">
              <img className="footer__address-image" src={Map} alt="Map" />
            </a>
          </div>
        </div>
        <hr className="footer__divider" />
        <p className="footer__copyright">© 2025 All Right Reserved</p>
      </footer>
    </div>
  );
}
