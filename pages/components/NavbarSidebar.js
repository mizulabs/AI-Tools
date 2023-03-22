import React, { useState } from "react";
import styles from "./NavbarSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavbarSidebar = () => {
  const [sectionOneOpen, setSectionOneOpen] = useState(false);
  const [sectionTwoOpen, setSectionTwoOpen] = useState(false);
  const [sectionThreeOpen, setSectionThreeOpen] = useState(false);

  const toggleSectionOne = () => {
    setSectionOneOpen(!sectionOneOpen);
  };

  const toggleSectionTwo = () => {
    setSectionTwoOpen(!sectionTwoOpen);
  };

  const toggleSectionThree = () => {
    setSectionThreeOpen(!sectionThreeOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuLogo}>
        <img src="/mizu.png" alt="Mizu logo" />
        <h3 className={styles.menuLogoText}>Mizu</h3>
      </div>
      <div className={styles.section}>
        <button
          className={styles.sectionButton}
          onClick={toggleSectionOne}
          aria-expanded={sectionOneOpen}
        >
          <FontAwesomeIcon
            icon={sectionOneOpen ? faChevronDown : faChevronRight}
            className={styles.chevronIcon}
          />
          AI Tools
        </button>
        {sectionOneOpen && (
          <ul className={styles.sectionList}>
            <li>
              <a href="#">NatSpec Doc</a>
            </li>
          </ul>
        )}
      </div>
      <div className={styles.section}>
        <button
          className={styles.sectionButton}
          onClick={toggleSectionTwo}
          aria-expanded={sectionTwoOpen}
        >
          <FontAwesomeIcon
            icon={sectionTwoOpen ? faChevronDown : faChevronRight}
            className={styles.chevronIcon}
          />
          Learn
        </button>
        {sectionTwoOpen && (
          <ul className={styles.sectionList}>
            <li>
              <a href="https://mizu.fi">Website</a>
            </li>
            <li>
              <a href="https://app.mizu.fi">Dapp</a>
            </li>
            <li>
              <a href="https://docs.mizu.fi">Docs</a>
            </li>
          </ul>
        )}
      </div>
      <div className={styles.section}>
        <button
          className={styles.sectionButton}
          onClick={toggleSectionThree}
          aria-expanded={sectionThreeOpen}
        >
          Chat
        </button>
        {sectionThreeOpen && (
          <ul className={styles.sectionList}>
            <li>
              <a href="#">Live Chat</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarSidebar;