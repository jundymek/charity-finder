import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Charities from "./components/Charities/Charities";
import CharitySearch from "./components/CharitySearch/CharitySearch";
import { Charity } from "./helpers/types";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(true);
  const [charities, setCharities] = useState<Charity[]>([]);

  return (
    <>
      {isWelcomeVisible ? (
        <Welcome setIsWelcomeVisible={setIsWelcomeVisible} />
      ) : (
        <>
          <Header />
          <CharitySearch setCharities={setCharities} />
          <Charities charities={charities} />
        </>
      )}
    </>
  );
}

export default App;
