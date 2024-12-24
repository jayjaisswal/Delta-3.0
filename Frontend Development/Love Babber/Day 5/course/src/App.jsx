import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards.jsx";
import Filter from "./components/Filter.jsx";
import { apiUrl, filterData } from "./data.jsx";
import Spinner from "./components/Spinner.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./index.css";
function App() {
  const [allCourse, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const responing = await fetch(apiUrl);
      const storing = await responing.json();
      //string output
      // console.log(storing)
      setInfo(storing.data);
    } catch (error) {
      toast.error("Data nhi aaya be");
      
    }
    setLoading(false);
    
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterdata={filterData}></Filter>
      </div>
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Cards allCourse={allCourse}></Cards>
        )}
      </div>
    </>
  );
}
export default App;
