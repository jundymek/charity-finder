import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  isVisible?: boolean;
  type?: "submit" | "button";
  onClick?: React.FormEventHandler;
  label?: ReactNode;
}

function Button({ isVisible = true, type = "button", onClick, label }: Props) {
  if (!isVisible) {
    return null;
  }
  return (
    <button type={type} className={styles.buttonPrimary} {...(type === "button" && { onClick: onClick })}>
      {label}
    </button>
  );
}

export default Button;
