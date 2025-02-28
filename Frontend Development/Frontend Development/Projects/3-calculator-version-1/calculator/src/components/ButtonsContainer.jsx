// import styles from "../App.module.css";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.BtnContainer}>
        {buttonNames.map((btns) => {
          return <button className={styles.button}>{btns}</button>;
        })}
      </div>
    </>
  );
};
export default ButtonsContainer;
