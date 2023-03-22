import React from "react";
import styles from "./NavbarSidebar.module.css";

const MenuLogo = () => {
  return (
    <div className={styles.menuLogo}>
      <img src="/mizu.png" alt="Mizu" />
      <h3>
        <a href="https://mizu.fi" target="_blank">
          Mizu
        </a>
      </h3>
    </div>
  );
};

export default MenuLogo;