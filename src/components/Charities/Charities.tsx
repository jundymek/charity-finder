import React, { useEffect, useState } from "react";
import { Charity } from "../../helpers/types";
import CharityBox from "../CharityBox/CharityBox";
import styles from "./Charities.module.scss";
import CharityFilter from "../CharityFilter/CharityFilter";

export interface Props {
  charities: Charity[];
  getData: (id: number) => Promise<void>;
  nextId: number;
}

function Charities({ charities, getData, nextId }: Props) {
  const [filteredCharities, setFilteredCharities] = useState<Charity[]>(charities);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  useEffect(() => {}, [charities, filteredCharities]);

  const handleSubmit: () => void = () => {
    getData(nextId);
  };

  return (
    <>
      <article className={styles.outerContainer}>
        {charities.length > 0 && (
          <>
            <h1>Charities</h1>
            <div className={styles.mainContainer}>
              {!isFiltered
                ? charities.map((charity: Charity) => <CharityBox project={charity} key={charity.id} />)
                : filteredCharities.map((charity: Charity) => <CharityBox project={charity} key={charity.id} />)}
            </div>
          </>
        )}
        {nextId > 1 && !isFiltered && (
          <button className={styles.buttonMore} onClick={handleSubmit}>
            Load more...
          </button>
        )}
      </article>
      <CharityFilter charities={charities} setFilteredCharities={setFilteredCharities} setIsFiltered={setIsFiltered} />
    </>
  );
}

export default Charities;
