import { useState, useRef} from "react";
import { RiAddLargeFill } from "react-icons/ri";


function AddTodo({onNewItem}) {

  const[todoName,setTodoName] = useState("");
  const [dueDate,setdueDate] = useState("");
  // const noOfClicks = useRef(0);
  // const todoNameElement = useRef();
  // const dueDateElement = useRef();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // noOfClicks.current = noOfClicks.current + 1;
    // console.log(noOfClicks.current);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  }


   const handleAddButtonClicked = (event) => {
    // event.preventDefault();
    // const todoName = todoNameElement.current.value;
    // const dueDate = dueDateElement.current.value;
    // todoNameElement.current.value = "";
    // dueDateElement.current.value = "";
    onNewItem(todoName,dueDate);
    setTodoName("");
    setdueDate("");
   
   }

  return(
    <div className="container">

    <div className=" row kg-row" >
      
    <div className="col-6" ><input type="text" placeholder="Enter todo here" 
    value ={todoName}
    onChange={handleNameChange}
    /></div>

    <div className="col-4" 
    value={dueDate}
    // ref = {dueDateElement}
    onChange={handleDateChange}
    ><input type="date"/></div>


    <div className="col-2">
    <button type="button" className="btn btn-success kg-button"
     onClick ={handleAddButtonClicked}
    >
      <RiAddLargeFill /></button>
   </div>
   </div>
   </div>
  );
};
export default AddTodo;