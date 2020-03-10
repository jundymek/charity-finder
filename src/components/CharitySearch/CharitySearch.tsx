import React, { useReducer, FormEvent } from "react";
import countries from "../../helpers/countriesSelectOptions.json";
import Select from "react-select";
import { ValueType } from "react-select/src/types";
import { nextCharitiesMapper } from "../../helpers/nextCharitiesMapper";
import { Charity, SelectedCountry, MappedResponse } from "../../helpers/types";
import styles from "./CharitySearch.module.scss";
import { customStyles } from "./customStyles";
import Charities from "../Charities/Charities";
import Button from "../Button/Button";
import { fetchNextCharities } from "./utils/fetchNextCharities";

interface Props {
  setIsActive: (arg0: boolean) => void;
  setIsLoading: (arg0: boolean) => void;
}

interface State {
  selectedCountry: SelectedCountry;
  nextId: number;
  charities: Charity[] | null;
}

type Action =
  | { type: "CHANGE_SELECTED_COUNTRY"; payload: SelectedCountry }
  | { type: "FETCH_NEW_DATA_START" }
  | { type: "FETCH_NEW_DATA_SUCCESS"; payload: MappedResponse };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: action.payload
      };
    case "FETCH_NEW_DATA_START":
      return {
        ...state,
        charities: []
      };
    case "FETCH_NEW_DATA_SUCCESS":
      return {
        ...state,
        charities: state.charities && state.charities.concat(action.payload.projects),
        nextId: action.payload.nextId
      };
    default:
      return state;
  }
}

function CharitySearch({ setIsActive, setIsLoading }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    selectedCountry: { value: "", label: "" },
    nextId: 1,
    charities: null
  });

  const { selectedCountry, nextId, charities } = state;

  const getData = (id: number) => {
    setIsLoading(true);
    return fetchNextCharities(id, selectedCountry).then(res => {
      dispatch({ type: "FETCH_NEW_DATA_SUCCESS", payload: nextCharitiesMapper(res) });
      setIsLoading(false);
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "FETCH_NEW_DATA_START" });
    setIsLoading(true);
    return getData(1)
      .then(() => {
        console.log("Success");
        setIsActive(true);
      })
      .catch(e => console.warn(e));
  };

  const handleCountryChange = (selectedOption: ValueType<SelectedCountry>) => {
    const selectedCountry = selectedOption as SelectedCountry;
    dispatch({ type: "CHANGE_SELECTED_COUNTRY", payload: selectedCountry });
  };

  const ButtonLabel = () => (
    <>
      Search for charities{" "}
      <span role="img" aria-label="Heart icon">
        ❤️
      </span>
    </>
  );

  return (
    <section className={styles.formContainer}>
      <div>
        <h1 className={styles.title}>Search for charity</h1>
      </div>
      <p className={styles.subtitle}>
        Filter charities by personal search conditions. Use form below to see charities matching yours criteria.
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formInnerContainer}>
          <label className={styles.formLabel} htmlFor="name">
            Select country
          </label>
          <Select styles={customStyles} options={countries} onChange={handleCountryChange} isClearable={true} />
        </div>
        <Button onClick={onSubmit} label={<ButtonLabel />} />
      </form>
      {charities && <Charities charities={charities} getData={getData} nextId={nextId} setIsLoading={setIsLoading} />}
    </section>
  );
}

export default CharitySearch;
