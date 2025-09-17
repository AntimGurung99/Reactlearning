import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import { useState } from "react";



function App() {

  // const initialTodoItems = [
  //   {
  //     name: "Have to study",
  //     dueDate: "2025/10/4"
  //   },
     
  //   {
  //     name: "Go to trekking",
  //     dueDate: "2024/8/6"
  //   },

  //   {
  //     name: "Watch a movie",
  //     dueDate: "2024/8/11"
  //   }
 //

  const [todoItems,setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
  console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  const newTodoItems = [...todoItems,{name: itemName, dueDate: itemDueDate}];
  setTodoItems(newTodoItems);
};



  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    setTodoItems(newTodoItems);
    // 
  }


  return <center
    className="todo-container">
    <AppName />
    <AddTodo onNewItem= {handleNewItems}/>
    {todoItems.length === 0 && <WelcomeMessage />}
    <TodoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem}></TodoItems>
  </center>

};
export default App;