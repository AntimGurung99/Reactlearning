import { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";


function AddTodo({onNewItem}) {

  const[todoName,setTodoName] = useState("");
  const [dueDate,setdueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  }


   const handleAddButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setTodoName("");
    setdueDate("");
   
   }

  return(
    <div className="container">

    <div className=" row kg-row">
      
    <div className="col-6" ><input type="text" placeholder="Enter todo here" 
    value ={todoName}
    onChange={handleNameChange}/></div>

    <div className="col-4" 
    value={dueDate}
    onChange={handleDateChange}><input type="date"/></div>


    <div className="col-2">
    <button type="Button" className="btn btn-success kg-button"
    onClick ={handleAddButtonClicked}><RiAddLargeFill /></button>
   </div>
   </div>
   </div>
  );
};
export default AddTodo;