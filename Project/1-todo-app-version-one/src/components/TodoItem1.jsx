function TodoItem1() {

  let todoName = "Have to study";
  let todoDate = "2025/10/4";
  return (
    <div className="container">
   
    <div className=" row kg-row">
      
    <div class="col-6" >{todoName}</div>

    <div class="col-4">{todoDate}</div>

    <div class="col-2"><button type="button" className="btn btn-danger kg-button">Delete</button>
    </div>
    </div>
    </div>
  );
}
export default TodoItem1;