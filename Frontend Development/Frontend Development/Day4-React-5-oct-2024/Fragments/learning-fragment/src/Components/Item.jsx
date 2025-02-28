import styles from "./Item.module.css";
const Item = ({ f, onClickOrders }) => {
  const onClickOrder = (event) => {
    console.log(event);

    console.log(`${f} Orderded`);
  };

  // const Item = ({ f }) Also Destructuring
  // let { f } = props; --> destructuring Agr ishko use krte h to props.f likhne ki zarurat nhi h bs f bhi likhne se kaam chL jayega
  return (
    <>
      <li className={`${styles["kg-Item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{f}</span>
        {/* // as no ther class like .list-group-item */}
        <button
          className={`${styles.OrderMe} btn btn-success`}
          // onClick = {(event) =>console.log("Hello")}
          // onClick={(event) => onClickOrder(event)}
          onClick={onClickOrder}
          // onClick={onClickOrders}
        >
          Order Me
        </button>
      </li>
    </>
  );
};
export default Item;

// import styles from "./Item.module.css";

// const Item = (props) => {
//   return (
//     <li className={`${styles['kg-Item']} list-group-item`}>
//       <span className={styles['kg-span']}>{props.f}</span>
//     </li>
//   );
// };

// export default Item;
