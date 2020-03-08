import React from "react";
import { Charity } from "../../helpers/types";
import styles from "./CharityBox.module.scss";

interface Props {
  project: Charity;
}

function CharityBox({ project }: Props) {
  const { title, id, addressCountry, addressCity, addressLine1, addressLine2, contactUrl } = project;
  const addressFields = [
    ["Country", addressCountry],
    ["City", addressCity],
    ["Address", addressLine2.length > 0 ? `${addressLine1}, ${addressLine2}` : addressLine1]
  ];

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
          {addressFields.map((field: (string | string[])[], index: number) => (
            <div key={index} className={styles.addressContainer}>
              <p className={styles.addressTitle}>{field[0]}</p>
              <p className={styles.addressValue}>{field[1]}</p>
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
