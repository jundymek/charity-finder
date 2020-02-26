import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import countries from "../../helpers/countriesSelectOptions.json";
import { filterCharities } from "../../helpers/filterCharities";
import Select from "react-select";
import { ValueType, ActionMeta } from "react-select/src/types";
import { propsMaper } from "../../helpers/propsMapper";
import { MappedResponse, Charity, SelectedCountry } from "../../helpers/types";

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

  const onSubmit = () => {
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
    <section>
      <h1>Search for charity</h1>
      <input type="text" name="name" id="name" onChange={handleInputChange} />
      <Select options={countries} onChange={handleCountryChange} value={selectedCountry} />
      <Select
        options={countries}
        onChange={handleCountriesOrganizationServes}
        value={selectedCountriesOrganizationServes}
        isMulti
      />
      <button onClick={onSubmit}></button>
    </section>
  );
}

export default CharitySearch;
