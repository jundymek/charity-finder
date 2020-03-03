import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import CharitySearch from "./components/CharitySearch/CharitySearch";
import Footer from "./components/Footer/Footer";
import './styles/main.scss'

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(true);
  // const [charities, setCharities] = useState<Charity[]>([]);

  return (
    <>
      {isWelcomeVisible ? (
        <Welcome setIsWelcomeVisible={setIsWelcomeVisible} />
      ) : (
        <>
          <Header />
          <CharitySearch />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
