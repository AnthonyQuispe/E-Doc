import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/icons/CloseIcon.png";
import "./MobileNav.scss";

export default function MobileNav({ onClickMobile }) {
  const linksArray = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Application", link: "/application" },
    { text: "History", link: "/history" },
  ];

  return (
    <div className="mobile-nav">
      <ul className="mobile-nav__list">
        {linksArray.map((navLink) => (
          <Link to={navLink.link} className="mobile-nav__link">
            <li className="mobile-nav__list">{navLink.text}</li>
          </Link>
        ))}
      </ul>
      <button className="mobile-nav__close-button" onClick={onClickMobile}>
        <img
          src={CloseIcon}
          alt="closeIcon"
          className="mobile-nav__close-button-icon"
        />
      </button>
    </div>
  );
}
