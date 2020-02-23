import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import countries from "../../helpers/countriesSelectOptions.json";
import { Charity } from "../../App";
import Select from "react-select";

interface Props {
  setCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
}

type Country = { value: string; label: string };

function CharitySearch({ setCharities }: Props) {
  let tempData = useRef<Charity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>({ value: "PL", label: "Poland" });
  const [nameInput, setNameInput] = useState<string>("")

  const fetchNextCharities = (id: number) => {
    return axios.get(
      `https://api.globalgiving.org/api/public/projectservice/countries/${selectedCountry["value"]}/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
    );
  };

  const mergeCharities = () => {
    setCharities(prevState => tempData.current);
  };

  const filterCharities = (data: Charity[], inputValue: string = "") => {
    return data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const getDataReculently = (id: number) => {
    return fetchNextCharities(id)
      .then(res => {
        if (res.data.projects.hasNext === true) {
          setTempData(res.data.projects.project, nameInput);
          getDataReculently(res.data.projects.nextProjectId);
        } else {
          if (res.data.projects.numberFound > 0) {
            setTempData(res.data.projects.project, nameInput);
          }
          mergeCharities();
          tempData.current = [];
        }
      })
      .catch(e => console.log(e));
  };

  const setTempData = (res: Charity[], nameValue: string) => {
    tempData.current = tempData.current.concat(filterCharities(res, nameInput));
  };

  const onSubmit = () => {
    getDataReculently(1)
      .then(() => console.log("Success"))
      .catch(e => console.warn(e));
  };

  const handleChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  return (
    <section>
      <h1>Search for charity</h1>
      <input type="text" name="name" id="name" onChange={handleInputChange}/>
      <Select options={countries} onChange={handleChange} value={selectedCountry} />
      <button onClick={onSubmit}></button>
    </section>
  );
}

export default CharitySearch;
