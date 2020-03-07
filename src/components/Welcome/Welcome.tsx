import React from "react";
import styles from "./Welcome.module.scss";

interface Props {
  isVisible?: boolean;
  setIsWelcomeVisible: (isVisible: boolean) => void;
}

function Welcome({ isVisible = true, setIsWelcomeVisible }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Welcome to charity finder</h2>
      <p className={styles.paragraph}>This simple app allows you to search for a list of global charities. Simply find a charity that matches your interests. <span role="img" aria-label="Heart icon">❤️</span></p>
      <button className={styles.button} onClick={() => setIsWelcomeVisible(false)}>Proceed to site</button>
    </section>
  );
}

export default Welcome;
