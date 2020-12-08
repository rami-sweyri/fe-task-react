import React from "react";
import styles from "./index.module.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
