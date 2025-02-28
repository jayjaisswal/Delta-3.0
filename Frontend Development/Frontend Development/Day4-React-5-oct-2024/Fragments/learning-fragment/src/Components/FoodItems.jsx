import Item from "./Item";
const FoodItems = ({ f }) => {
  return (
    <ul className="list-group">
      {f.map((item, i) => (
        <Item
          key={item}
          f={item}
          onClickOrders={() => console.log((onclick = `${i} ${item} bought`))}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
