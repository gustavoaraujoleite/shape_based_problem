"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";

export default function Shape({ data }) {
  const [clickedArray, setClickedArray] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const formattedData = data.join(",").split(",");
  const filteredArray = formattedData.filter((item) => item != "0");

  function clickedHandler(index) {
    if (clickedArray.includes(index)) return;
    setClickedArray(clickedArray.concat(index));
  }

  function removeActiveStatus() {
    let index = 0;
    const interval = setInterval(() => {
      setClickedArray((prevArray) => {
        const newArray = [...prevArray];
        newArray.shift();
        index++;
        if (newArray.length === 0) {
          clearInterval(interval);
          setDisableBtn(false);
        }
        return newArray;
      });
    }, 500);
  }

  useEffect(() => {
    if (filteredArray.length === clickedArray.length) {
      setDisableBtn(true);
      removeActiveStatus();
    }
  }, [clickedArray]);

  return (
    <section className={styles.container}>
      {formattedData.map((item, index) => {
        return (
          <div
            key={index}
            className={`${item === "1" ? styles.main_box : ""} ${
              clickedArray.includes(index) && styles.active
            }`}
            onClick={() => {
              if (disableBtn) {
                return;
              } else {
                clickedHandler(index);
              }
            }}
          ></div>
        );
      })}
    </section>
  );
}
