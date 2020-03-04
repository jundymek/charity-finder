import React, { useState } from "react";
import axios from "axios";
import countries from "../../helpers/countriesSelectOptions.json";
import Select from "react-select";
import { ValueType } from "react-select/src/types";
import { propsMaper } from "../../helpers/propsMapper";
import { Charity, SelectedCountry } from "../../helpers/types";
import styles from "./CharitySearch.module.scss";
import { customStyles } from "./customStyles";
import Charities from "../Charities/Charities";

interface Props {
  setIsActive: (cb: (prevState: boolean) => boolean) => void;
  setIsLoading: (boolean: any) => void;
}

function CharitySearch({ setIsActive, setIsLoading }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>({ value: "", label: "" });
  const [nextId, setNextId] = useState<number>(1);
  const [charities, setCharities] = useState<Charity[]>([]);

  const fetchNextCharities = (id: number) => {
    if (selectedCountry && selectedCountry["value"].length) {
      return axios.get(
        `https://api.globalgiving.org/api/public/projectservice/countries/${selectedCountry["value"]}/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
      );
    }
    return axios.get(
      `https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
    );
  };

  const getData = (id: number) => {
    return fetchNextCharities(id).then(res => {
      const mappedResponse = propsMaper(res);
      console.log(mappedResponse);
      setNextId(mappedResponse.nextId);
      setCharities(prevState => [...prevState.concat(mappedResponse.projects)]);
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setCharities([]);
    getData(1)
      .then(() => {
        console.log("Success");
        setIsActive(prevState => true);
        setIsLoading(false);
      })
      .catch(e => console.warn(e));
  };

  const handleCountryChange = (selectedOption: ValueType<SelectedCountry>) => {
    const selectedCountry = selectedOption as SelectedCountry;
    setSelectedCountry(selectedCountry);
  };

  return (
    <section className={styles.formContainer}>
      <div>
        <h1 className={styles.title}>Search for charity</h1>
      </div>
      <p className={styles.subtitle}>
        Filter charities by personal search conditions. Use form below to see charities matching yours criteria.
      </p>
      <form className={styles.form}>
        <div className={styles.formInnerContainer}>
          <label className={styles.formLabel} htmlFor="name">
            Select country
          </label>
          <Select styles={customStyles} options={countries} onChange={handleCountryChange} isClearable={true} />
        </div>
        <button className={styles.button} onClick={onSubmit}>
          Search for charities{" "}
          <span role="img" aria-label="Heart icon">
            ❤️
          </span>
        </button>
      </form>
      {charities.length > 0 && (
        <Charities charities={charities} getData={getData} nextId={nextId} setIsLoading={setIsLoading} />
      )}
    </section>
  );
}

export default CharitySearch;
