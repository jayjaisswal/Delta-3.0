import { useNavigate } from "react-router-dom";
const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }
  function goBack() {
    navigate(-1);
  }
  return (
    <div>
      <div>
        <h1>Labs</h1>
      </div>
      <button onClick={clickHandler}>Move to About PAge</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Labs;
