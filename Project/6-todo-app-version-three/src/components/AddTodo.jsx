import { useState } from "react";
function AddTodo({onNewItems}) {

  const[todoName,setTodoname] = useState();
  const [todoDate,setTododate] = useState();

  const handleNameChange = (event) => {
    setTodoname(event.target.value);
  };

  const handleDateChange = (event) => {
    setTododate(event.target.value);
  }


   const handleAddButtonClicked = () => {
    onNewItems(todoName,todoDate);
    todoName("");
    todoDate("");
   
   }

  return(
    <div className="container">

    <div className=" row kg-row">
      
    <div className="col-6" ><input type="text" placeholder="Enter todo here" 
    value ={todoName}
    onChange={handleNameChange}/></div>

    <div className="col-4" 
    value={todoDate}
    onChange={handleDateChange}><input type="date"/></div>


    <div className="col-2">
    <button type="Button" className="btn btn-success kg-button"
    onClick ={handleAddButtonClicked}>Add</button>
   </div>
   </div>
   </div>
  );
};
export default AddTodo;