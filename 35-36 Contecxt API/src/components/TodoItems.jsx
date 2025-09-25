import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

const TodoItems = ({todoItems, onDeleteClick}) => {
   const todoItemsFromContext = useContext(TodoItemsContext);
   console.log(`items from context: ${todoItemsFromContext}`);

  return(
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (<TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}
      onDeleteClick={onDeleteClick}></TodoItem>))}
    </div>
  );
};


export default TodoItems;