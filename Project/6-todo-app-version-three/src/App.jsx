import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import './App.css';
import { useState } from "react";


function App() {

  const intialTodoItems = [
    {
      name: "Have to study",
      dueDate: "2025/10/4"
    },
     
    {
      name: "Go to trekking",
      dueDate: "2024/8/6"
    },

    {
      name: "Watch a movie",
      dueDate: "2024/8/11"
    }
  ];

  const [todoItems,setTodoItems] = useState(intialTodoItems);

  const handleNewItems = (itemName, itemDueDate) => {
  console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  const newTodoItems = [...todoItems,{name: itemName, dueDate: itemDueDate}];
  setTodoItems(newTodoItems);
};


  return <center
    className="todo-container">
    <AppName />
    <AddTodo onNewItems = {handleNewItems}/>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>

};
export default App;