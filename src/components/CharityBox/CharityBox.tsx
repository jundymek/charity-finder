import React from "react";
import { Charity } from "../../helpers/types";
import styles from "./CharityBox.module.scss";

interface Props {
  project: Charity;
}

function CharityBox({ project }: Props) {
  return (
    <section className={styles.charityContainer}>
      <div className={styles.leftBox}>
        <img className={styles.logoImage} src={project.logoImage} alt="Project logo" />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.addressTitleContainer}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.id}>id: {project.id}</p>
        </div>
        <div className={styles.addressContainer}>
          <p className={styles.addressTitle}>Country</p>
          <p className={styles.addressValue}>{project.address.country}</p>
        </div>
        <div className={styles.addressContainer}>
          <p className={styles.addressTitle}>City</p>
          <p className={styles.addressValue}>{project.address.city}</p>
        </div>
        <div className={styles.addressContainer}>
          <p className={styles.addressTitle}>Address</p>
          <p className={styles.addressValue}>{project.address.addressLine1}</p>
          {project.address.addressLine2.length > 0 && (
            <p className={styles.addressValue}>{project.address.addressLine2}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CharityBox;
