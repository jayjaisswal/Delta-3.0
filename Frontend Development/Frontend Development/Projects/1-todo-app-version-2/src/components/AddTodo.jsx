function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success kg-buttton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
