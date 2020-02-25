import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import countries from "../../helpers/countriesSelectOptions.json";
import Select from "react-select";
import { ValueType, GroupType, ActionMeta } from "react-select/src/types";
import { propsMaper } from "../../helpers/propsMapper";
import { MappedResponse } from "../../helpers/types.js";
import { Charity, Selected } from "../../helpers/types";

interface Props {
  setCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
}

type SelectedCountry = { value: string; label: string };


function CharitySearch({ setCharities }: Props) {
  let tempData = useRef<Charity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>({ value: "PL", label: "Poland" });
  const [selectedCountriesOrganizationServes, setselectedCountriesOrganizationServes] = useState<SelectedCountry[]>([]);
  const [nameInput, setNameInput] = useState<string>("");

  const fetchNextCharities = (id: number) => {
    return axios.get(
      `https://api.globalgiving.org/api/public/projectservice/countries/${selectedCountry["value"]}/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
    );
  };

  const mergeCharities = () => {
    setCharities(prevState => tempData.current);
  };

  const compareCountries = (data: Charity[]) => {
    let isValid: boolean = false;
    data.forEach((item: any) => {
      console.log(item);
      console.log(selectedCountriesOrganizationServes);
      console.log(
        item.organization.countries.country.filter((val: any) =>
          selectedCountriesOrganizationServes.map(item => item.label).includes(val.name)
        ).length
      );
    });
  };

  const filterCharities = (data: Charity[], inputValue: string = "") => {
    return data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const getDataReculently = (id: number) => {
    return fetchNextCharities(id)
      .then(res => {
        const mappedResponse = propsMaper(res);
        if (res.data.projects.hasNext === true) {
          setTempData(mappedResponse, nameInput);
          getDataReculently(mappedResponse.nextId);
        } else {
          if (mappedResponse.projects.length) {
            setTempData(mappedResponse, nameInput);
          }
          mergeCharities();
          tempData.current = [];
        }
      })
      .catch(e => console.log(e));
  };

  const setTempData = (res: MappedResponse, nameValue: string) => {
    // compareCountries(res);
    tempData.current = tempData.current.concat(filterCharities(res.projects, nameInput));
  };

  const onSubmit = () => {
    getDataReculently(1)
      .then(() => console.log("Success"))
      .catch(e => console.warn(e));
  };

  const handleCountryChange = (selectedOption: ValueType<SelectedCountry>)  => {
    const selectedCountry = (selectedOption as SelectedCountry);
    setSelectedCountry(selectedCountry);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleCountriesOrganizationServes = (selectedOption: ValueType<SelectedCountry>, e: ActionMeta) => {
    const selectedCountries = ((selectedOption as SelectedCountry[]));
    setselectedCountriesOrganizationServes(selectedCountries);
  };

  return (
    <section>
      <h1>Search for charity</h1>
      <input type="text" name="name" id="name" onChange={handleInputChange} />
      <Select options={countries} 
      onChange={handleCountryChange} 
      value={selectedCountry} />
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
