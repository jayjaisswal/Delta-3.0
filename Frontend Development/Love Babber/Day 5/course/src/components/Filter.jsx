import './Filter.css';
function Filter({ filterdata }) {
  return (
    <div className="parentbtn" >
      {filterdata.map((data) => {  // study about map function
        return <button className="btn btn-primary spacing" key={data.id}>{data.title}</button>;
      })}
    </div>
  );
}
export default Filter;
