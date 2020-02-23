import React, { useEffect } from "react";
import { Charity } from "../../App";

interface Props {
  charities: Charity[];
}

function Charities({ charities }: Props) {
  useEffect(() => {}, [charities]);

  return (
    <section>
      <h1>Charities</h1>
      {charities.map(charity => (
        <p>{charity.title}</p>
      ))}
    </section>
  );
}

export default Charities;
