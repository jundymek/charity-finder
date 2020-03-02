import React from "react";
import { Charity } from "../../helpers/types";
import styles from "./CharityBox.module.scss";

interface Props {
  project: Charity;
}

function CharityBox({ project }: Props) {
  const addressFields = [
    ["Country", project.address.country],
    ["City", project.address.city],
    [
      "Address",
      project.address.addressLine2.length > 0
        ? `${project.address.addressLine1}, ${project.address.addressLine2}`
        : project.address.addressLine1
    ]
  ];

  return (
    <div className={styles.charityOuterContainer}>
      <section className={styles.charityContainer}>
        <div className={styles.leftBox}>
          <a className={styles.logoLink} href={project.contactUrl} title={project.contactUrl}><img className={styles.logoImage} src={project.logoImage} alt="Project logo" /></a>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.addressTitleContainer}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.id}>id: {project.id}</p>
          </div>
          {addressFields.map((field: (string | string[])[], index:number) => (
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
