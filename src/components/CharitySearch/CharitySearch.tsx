import React, { useState } from "react";
import axios from "axios";
import countries from "../../helpers/countries.json";
import { Charity } from "../../App";
import Select from "react-select";

interface Props {
  setCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
}

type Country = { value: string; label: string };

function CharitySearch({ setCharities }: Props) {
  let countryOptions: Country[] = getCountriesOptions();


  const onSubmit = () => {
    function getData(id:number) {
      return axios
        .get(
          `https://api.globalgiving.org/api/public/projectservice/countries/IN/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
        )
        .then(res => {
          if (res.data.projects.hasNext===true) {
            setCharities(prevState => [...prevState.concat(res.data.projects.project)]);
            getData(res.data.projects.nextProjectId);
            
          } else {
            console.log("YES");
          }
        })
    }

    getData(1);
  };

  return (
    <section>
      <h1>Search for charity</h1>
      <Select options={countryOptions} />
      <button onClick={onSubmit}></button>
    </section>
  );
}

export default CharitySearch;

function getCountriesOptions() {
  let countryOptions: Country[] = [];
  countries.map(country => countryOptions.push({ value: country["country-code"], label: country.name }));
  return countryOptions;
}
