import React, { useEffect } from "react";
import { Charity } from "../../helpers/types";
import CharityBox from "../CharityBox/CharityBox";
import styles from "./Charities.module.scss";

interface Props {
  charities: Charity[];
  getData: (id: number) => Promise<void>;
  nextId: number;
}

function Charities({ charities, getData, nextId }: Props) {
  useEffect(() => {}, [charities]);

  const handleSubmit: () => void = () => {
    getData(nextId);
  };

  return (
    <article className={styles.outerContainer}>
      {charities.length > 0 && (
        <>
          <h1>Charities</h1>
          <div className={styles.mainContainer}>
            {charities.map((charity: Charity) => (
              <CharityBox project={charity} key={charity.id} />
            ))}
          </div>
        </>
      )}
      {nextId > 1 && (
        <button className={styles.buttonMore} onClick={handleSubmit}>
          Load more...
        </button>
      )}
    </article>
  );
}

export default Charities;
