import { Outlet } from "react-router-dom";
const MainHeader = () => {
  return (
    <div>
      <Outlet />
      {/* <h1>MainHeader</h1> */}
    </div>
  );
};

export default MainHeader;
