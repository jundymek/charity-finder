import React from "react";
import axios from 'axios'
import coutries from '../../helpers/countries.json'
import {Charity} from '../../App'

interface Props {
  setCharities: (cb: (prevState: Charity[]) => Charity[]) => void;
}

function CharitySearch({setCharities}:Props) {

  console.log(coutries)

  const onSubmit = () => {
    axios.get('https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0')
    .then(res => setCharities(res.data.projects.project))
  }

  return (
    <section>
      <h1>Search for charity</h1>
      <button onClick={onSubmit}></button>
    </section>
  );
}

export default CharitySearch;
