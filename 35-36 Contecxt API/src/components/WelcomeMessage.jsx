import styles from './WelcomeMessage.module.css';
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
     const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.lenght === 0 && <p className={styles.Welcome}>Enjoy your day</p>
    );
};

export default WelcomeMessage;