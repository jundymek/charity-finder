import React, { useState, ChangeEvent } from "react";
import Select from "react-select";
import { Charity, SelectedCountry } from "../../helpers/types";
import { ValueType, ActionMeta } from "react-select/src/types";
import { filterCharities } from "../../helpers/filterCharities";
import { customStyles } from "../CharitySearch/customStyles";
import countries from "../../helpers/countriesSelectOptions.json";
import styles from "./CharityFilter.module.scss";

interface Props {
  setFilteredCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
  charities: Charity[];
  setIsFiltered: (cb: (prevState: boolean) => boolean) => void;
}

function CharityFilter({ charities, setFilteredCharities, setIsFiltered }: Props) {
  const [selectedCountriesOrganizationServes, setselectedCountriesOrganizationServes] = useState<SelectedCountry[]>([]);
  const [nameInput, setNameInput] = useState<string>("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const handleCountriesOrganizationServes = (selectedOption: ValueType<SelectedCountry>, e: ActionMeta) => {
    const selectedCountries = selectedOption as SelectedCountry[];
    setselectedCountriesOrganizationServes(selectedCountries);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const newData = filterCharities(charities, nameInput, selectedCountriesOrganizationServes);
    console.log(newData);
    setFilteredCharities(prevState => newData);
    setIsFiltered(prevState => !prevState);
  };
  return (
    <section className={styles.container}>
      <h3>Filter charities</h3>
      <form className={styles.form}>
        <div className={styles.formInnerContainer}>
          <label className={styles.formLabel} htmlFor="name">
            Charity name
          </label>
          <input
            className={styles.formInput}
            placeholder="Enter charity name"
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formInnerContainer}>
          <label className={styles.formLabel} htmlFor="name">
            Select countries the organization serves
          </label>
          <Select
            styles={customStyles}
            options={countries}
            onChange={handleCountriesOrganizationServes}
            value={selectedCountriesOrganizationServes}
            isMulti
          />
        </div>
        <button className={styles.button} onClick={onSubmit}>
          Filter charities
          <span role="img" aria-label="Heart icon">
            ❤️
          </span>
        </button>
      </form>
    </section>
  );
}

export default CharityFilter;
