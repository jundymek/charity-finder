import React, { useEffect, useState } from "react";
import { Charity } from "../../helpers/types";
import CharityBox from "../CharityBox/CharityBox";
import styles from "./Charities.module.scss";
import CharityFilter from "../CharityFilter/CharityFilter";
import Button from "../Button/Button";

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
  const isButtonMoreVisible = nextId > 1 && !isFiltered;

  const handleSubmit: () => void = () => {
    setIsLoading(true);
    return getData(nextId).then(() => setIsLoading(false));
  };

  return (
    <div className={styles.outerContainer}>
      <h1>Charities</h1>
      <div className={styles.mainContainer}>
        {charitiesToRender.map(charity => (
          <CharityBox project={charity} key={charity.id} />
        ))}
        {(charities.length === 0 || filteredCharities.length === 0) && (
          <p>There are no charities matching specified criteria!</p>
        )}
      </div>
      <Button isVisible={isButtonMoreVisible} onClick={handleSubmit} label="Load more..." />
      <CharityFilter charities={charities} setFilteredCharities={setFilteredCharities} setIsFiltered={setIsFiltered} />
    </div>
  );
}

export default Charities;
