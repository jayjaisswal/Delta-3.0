import style from "./InputOrder.module.css";
const InputOrder = ({ Inputordr }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Order"
        className={style.InputOrder}
        onKeyDown={Inputordr}
      />
    </>
  );
};
export default InputOrder;
