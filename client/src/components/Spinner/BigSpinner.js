import React from "react";
import styles from "./index.module.css";

const BigSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className={styles.bigLoader}></div>
    </div>
  );
};

export default BigSpinner;
