import React from "react";
import styles from "./Button.module.scss";

interface Props {
  isVisible?: boolean;
  onClick: (e: React.FormEvent<Element>) => void;
  label?: string | JSX.Element;
}

function Button({ isVisible = true, onClick, label }: Props) {
  return (
    <>
      {isVisible && (
        <button type="submit" className={styles.buttonMore} onClick={onClick}>
          {label}
        </button>
      )}
    </>
  );
}

export default Button;
