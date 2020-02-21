import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>Charity finder</h1>
    </section>
  );
}

export default Header;
