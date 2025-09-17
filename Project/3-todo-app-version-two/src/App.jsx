import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import './App.css';



function App(){

  const todoItems = [
    {name: "Have to study",
     date: "2025/10/4"},

    {name: "Go to trekking",
     date: "2024/8/6"},

     {name: "Watch a movie",
     date: "2024/8/11"}
  ];

  return <center
  className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
    </center>

};
export default App;