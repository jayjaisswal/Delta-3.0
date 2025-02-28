import "./Filter.css";
function Filter({ filterdata, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="parentbtn">
      {filterdata.map((data) => {
        // study about map function
        return (
          <button
            className="btn btn-primary spacing"
            onClick={() => filterHandler(data.title)}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
