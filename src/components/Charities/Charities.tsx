import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Charity} from '../../App';

// type Charity = {title: string}

interface Props {
  charities: Charity[];
}


function Charities({charities}: Props) {
  console.log(charities)
  useEffect(() => {
  }, [charities])

  return (
    <section>
      <h1>Charities</h1>
        {
          charities.map((charity) => 
            <p>{charity.title}</p>
            )
        }
    </section>
  );
}

export default Charities;
