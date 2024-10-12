import styles from "./Item.module.css";
const Item = (props) => {
  // const Item = ({ f }) Also Destructuring
  // let { f } = props; --> destructuring Agr ishko use krte h to props.f likhne ki zarurat nhi h bs f bhi likhne se kaam chL jayega
  return (
    <>
      <li className={`${styles["kg-Item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{props.f}</span>  
        {/* // as no ther class like .list-group-item */}
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
