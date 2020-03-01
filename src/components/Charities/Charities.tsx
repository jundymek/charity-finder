import React, { useEffect } from "react";
import { Charity } from "../../helpers/types";
import CharityBox from "../CharityBox/CharityBox";
import styles from  './Charities.module.scss';

interface Props {
  charities: Charity[];
}

function Charities({ charities }: Props) {
  useEffect(() => {}, [charities]);

  return (  
    <article className={styles.outerContainer}>
      {charities.length > 0 && 
      <>
        <h1>Charities</h1>
        <div className={styles.mainContainer}>
          {charities.map((charity: Charity) => (
            <CharityBox project={charity} key={charity.id} />
          ))}
        </div>
      </>
      }
    </article>
  );
}

export default Charities;
