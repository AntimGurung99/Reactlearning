function TodoItem2() {

  let todoName = "Go to trekking";
  let todoDate = "2024/8/6";

  return (
    <div className="container text-center">
   
    <div className="row kg-row">
      
    <div class="col-6" >{todoName}</div>

    <div class="col-4">{todoDate}</div>


    <div class="col-2"><button type="button" className="btn btn-danger kg-button">Delete</button>
    </div>
    </div>
    </div>


  );
}; 

export default TodoItem2;