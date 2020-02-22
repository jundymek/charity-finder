import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Charities from "./components/Charities/Charities";
import CharitySearch from "./components/CharitySearch/CharitySearch";

export type Charity = {title: string}


function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(true);
  const [charities, setCharities] = useState<Charity[]>([]) ;

  return (
    <div>
      <Header />
      {isWelcomeVisible && <Welcome setIsWelcomeVisible={setIsWelcomeVisible} />}
      <CharitySearch setCharities={setCharities} />
      <Charities charities={charities}/>
    </div>
  );
}

export default App;
