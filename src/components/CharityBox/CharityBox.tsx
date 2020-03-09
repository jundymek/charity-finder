import React from "react";
import { Charity } from "../../helpers/types";
import styles from "./CharityBox.module.scss";

interface Props {
  project: Charity;
}

function CharityBox({ project }: Props) {
  const { title, id, addressCountry, addressCity, addressLine1, addressLine2, contactUrl } = project;
  const addressFields = {
    country: addressCountry,
    city: addressCity,
    address: addressLine2.length > 0 ? `${addressLine1}, ${addressLine2}` : addressLine1
  };

  return (
    <div className={styles.charityOuterContainer}>
      <section className={styles.charityContainer}>
        <div className={styles.leftBox}>
          <a className={styles.logoLink} href={contactUrl} title={contactUrl}>
            <img className={styles.logoImage} src={project.logoImage} alt="Project logo" />
          </a>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.addressTitleContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.id}>id: {id}</p>
          </div>

          {Object.entries(addressFields).map(([key, value], index) => (
            <div key={index} className={styles.addressContainer}>
              <p className={styles.addressTitle}>{key}</p>
              <p className={styles.addressValue}>{value}</p>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarA}></div>
        <div className={styles.bottomBarB}></div>
        <div className={styles.bottomBarC}></div>
      </div>
    </div>
  );
}

export default CharityBox;
