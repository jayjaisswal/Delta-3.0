function Filter({ filterdata }) {
  return (
    <>
      {filterdata.map((data) => {  // study about map function
        return <button key={data.id}>{data.title}</button>;
      })}
    </>
  );
}
export default Filter;
