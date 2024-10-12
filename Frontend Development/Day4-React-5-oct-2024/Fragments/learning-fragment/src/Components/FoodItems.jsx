import Item from "./Item";
const FoodItems = ({ f }) => {
  return (
    <ul className="list-group">
      {f.map((item) => (
        <Item key={item} f={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
