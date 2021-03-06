import React, { useState, useEffect, ChangeEvent, FormEventHandler } from "react";
import Select from "react-select";
import { Charity, SelectedCountry } from "../../types/types";
import { ValueType, ActionMeta } from "react-select/src/types";
import { filterCharities } from "./utils/filterCharities";
import { customStyles } from "../CharitySearch/customStyles";
import countries from "../../helpers/countriesSelectOptions.json";
import styles from "./CharityFilter.module.scss";
import Button from "../Button/Button";
import Icon from "../../images/filter-icon.svg";

interface Props {
  setFilteredCharities: (charities: Charity[]) => void;
  charities: Charity[];
  setIsFiltered: (value:boolean) => void;
}

function CharityFilter({ charities, setFilteredCharities, setIsFiltered }: Props) {
  const [selectedCountriesOrganizationServes, setselectedCountriesOrganizationServes] = useState<SelectedCountry[]>([]);
  const [nameInput, setNameInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  useEffect(() => {
    setselectedCountriesOrganizationServes([])
  }, [charities])

  const handleCountriesOrganizationServes = (selectedOption: ValueType<SelectedCountry>, e: ActionMeta) => {
    const selectedCountries = selectedOption as SelectedCountry[];
    setselectedCountriesOrganizationServes(selectedCountries);
  };

  const handleSubmit:FormEventHandler = e => {
    e.preventDefault();
    const newData = filterCharities(charities, nameInput, selectedCountriesOrganizationServes);
    setFilteredCharities(newData);
    setIsFiltered(true);
  };

  const ButtonLabel = () => (
    <div className={styles.iconLabelWrapper}>
      <span className={styles.iconLabelParagraph}>Filter charities</span>
      <img className={styles.iconImage} src={Icon} alt="Filter icon" />
    </div>
  );

  if (charities.length === 0) {
    return null;
  }
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Filter received data</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <Button type="submit" label={<ButtonLabel />} />
      </form>
    </section>
  );
}

export default CharityFilter;
