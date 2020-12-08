import React from "react";
import styles from "./index.module.css";

const SmallSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className={styles.smallLoader}></div>
    </div>
  );
};

export default SmallSpinner;
