import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import countries from "../../helpers/countriesSelectOptions.json";
import { filterCharities } from "../../helpers/filterCharities";
import Select from "react-select";
import { ValueType, ActionMeta } from "react-select/src/types";
import { propsMaper } from "../../helpers/propsMapper";
import { MappedResponse, Charity, SelectedCountry } from "../../helpers/types";
import styles from "./CharitySearch.module.scss";
import { customStyles } from "./customStyles";

interface Props {
  setCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
}

function CharitySearch({ setCharities }: Props) {
  let tempData = useRef<Charity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>({ value: "PL", label: "Poland" });
  const [selectedCountriesOrganizationServes, setselectedCountriesOrganizationServes] = useState<SelectedCountry[]>([]);
  const [nameInput, setNameInput] = useState<string>("");

  console.log(selectedCountry);

  const fetchNextCharities = (id: number) => {
    return axios.get(
      `https://api.globalgiving.org/api/public/projectservice/countries/${selectedCountry["value"]}/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
    );
  };

  const mergeCharities = () => {
    setCharities(prevState => tempData.current);
  };

  const getDataReculently = (id: number) => {
    return fetchNextCharities(id)
      .then(res => {
        const mappedResponse = propsMaper(res);
        if (mappedResponse.hasNext === true) {
          setTempData(mappedResponse, nameInput);
          getDataReculently(mappedResponse.nextId);
        } else {
          if (mappedResponse.projects) {
            setTempData(mappedResponse, nameInput);
          }
          mergeCharities();
          tempData.current = [];
        }
      })
      .catch(e => console.log(e));
  };

  const setTempData = (res: MappedResponse, nameValue: string) => {
    tempData.current = tempData.current.concat(
      filterCharities(res.projects, nameInput, selectedCountriesOrganizationServes)
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    getDataReculently(1)
      .then(() => console.log("Success"))
      .catch(e => console.warn(e));
  };

  const handleCountryChange = (selectedOption: ValueType<SelectedCountry>) => {
    const selectedCountry = selectedOption as SelectedCountry;
    setSelectedCountry(selectedCountry);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleCountriesOrganizationServes = (selectedOption: ValueType<SelectedCountry>, e: ActionMeta) => {
    const selectedCountries = selectedOption as SelectedCountry[];
    setselectedCountriesOrganizationServes(selectedCountries);
  };

  return (
    <section className={styles.formContainer}>
      <div>
        <h1 className={styles.title}>Search for charity</h1>
      </div>
      <p className={styles.subtitle}>
        Filter charities by search conditions. Use form below to see charities matching yours criteria.
      </p>
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
            Select country
          </label>
          <Select styles={customStyles} options={countries} onChange={handleCountryChange} value={selectedCountry} />
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
          Search for charities{" "}
          <span role="img" aria-label="Heart icon">
            ❤️
          </span>
        </button>
      </form>
    </section>
  );
}

export default CharitySearch;
