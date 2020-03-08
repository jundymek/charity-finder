import React, { useEffect, useState } from "react";
import { Charity } from "../../helpers/types";
import CharityBox from "../CharityBox/CharityBox";
import styles from "./Charities.module.scss";
import CharityFilter from "../CharityFilter/CharityFilter";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export interface Props {
  charities: Charity[];
  getData: (id: number) => Promise<void>;
  nextId: number;
  setIsLoading: (boolean: boolean) => void;
}

function Charities({ charities, getData, nextId, setIsLoading }: Props) {
  const [filteredCharities, setFilteredCharities] = useState<Charity[]>(charities);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    setFilteredCharities(charities);
  }, [charities]);

  const charitiesToRender = isFiltered ? filteredCharities : charities;

  return (
    <div className={styles.outerContainer}>
      <h1>Charities</h1>
      <div className={styles.mainContainer}>
        {charitiesToRender.map(charity => (
          <CharityBox project={charity} key={charity.id} />
        ))}
      </div>
      <LoadMoreButton nextId={nextId} isFiltered={isFiltered} getData={getData} setIsLoading={setIsLoading} />
      <CharityFilter charities={charities} setFilteredCharities={setFilteredCharities} setIsFiltered={setIsFiltered} />
    </div>
  );
}

export default Charities;
