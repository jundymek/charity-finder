import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import CharitySearch from "./components/CharitySearch/CharitySearch";
import Footer from "./components/Footer/Footer";
import './styles/main.scss'
import styles from "./styles/App.module.scss";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false)
  console.log(isActive)
  return (
    <>
      {isWelcomeVisible ? (
        <Welcome setIsWelcomeVisible={setIsWelcomeVisible} />
      ) : (
        <>
          <div className={!isActive ? styles.main : styles.mainActive}>
            <Header />
            <CharitySearch setIsActive={setIsActive}/>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
