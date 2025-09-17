import styles from './FoodInput.module.css';

const FoodInput = ({handleKeyDown}) =>{

    return( 
      <
        input type="text" 
        placeholder='Search for healthy food items' 
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
     );
};


export default FoodInput;