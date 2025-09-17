import styles from './Item.module.css';
// const Item = (props) =>{
//   return (
//     <li className="list-group-item">{props.fooditems}</li>
//   );
// };

// export default Item;

//destructuring props
const Item = ({fooditems, bought, handleBuyButton}) =>{

     

  return (
    // <li className="list-group-item kg-item"><span className="kg-span">{fooditems}</span></li>
     <li className={`${styles['kg-item']} list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{fooditems}</span>
     <button className={`${styles.button} btn btn-primary`}
       onClick={handleBuyButton}>
      {/* onKeyDown ={handleKeyDown} */}
      Buy</button>
     </li>
  );
};

export default Item;