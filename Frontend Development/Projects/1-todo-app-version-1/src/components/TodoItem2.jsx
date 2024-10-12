function TodoItem2() {
  let todoNAme = "Go to School";
  let todoDate = "4/10/2024";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoNAme}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kg-buttton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
