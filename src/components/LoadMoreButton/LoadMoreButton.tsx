import React from "react";
import styles from "./LoadMoreButton.module.scss";

interface Props {
  nextId: number;
  isFiltered: boolean;
  setIsLoading: (boolean: boolean) => void;
  getData: (id: number) => Promise<void>;
}

function LoadMoreButton({ nextId, isFiltered, getData, setIsLoading }: Props) {
  const handleSubmit: () => void = () => {
    setIsLoading(true);
    return getData(nextId).then(() => setIsLoading(false));
  };
  return (
    <>
      {nextId > 1 && !isFiltered && (
        <button className={styles.buttonMore} onClick={handleSubmit}>
          Load more...
        </button>
      )}
    </>
  );
}

export default LoadMoreButton;
