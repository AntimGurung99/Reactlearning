import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  //let fooditems = ['Oatmeal', 'Peanut', 'Milk', 'Banana', 'Apple'];

  // let textStateArr = useState('Text to enter by user');
  let [fooditems, setFooditems] = useState([]);
  //  let textToShow = textStateArr[0];
  //  let setTextValue = textStateArr[1];

  //let[textToShow,setTextValue] = useState('Text to enter by user');
  //  console.log(`Current text value is ${textToShow}`);


  const onKeyDown = (event) => {
    // console.log(event);
    //  setTextValue(event.target.value);
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...fooditems, newFoodItem];
      setFooditems(newItems);
      // console.log("Food value entered is:" + newFoodItem);
    }

  }
  //let fooditems = [];

  // if(fooditems.length === 0){
  //   return <h3>No food items found</h3>;
  // }

  //  let emptyMessage = fooditems.length === 0 ? <h3>No food items found</h3> : null;

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        {/* {fooditems.length === 0 ? <h3>No food items found</h3> : null} emptyMessage */}

        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <ErrorMessage items={fooditems}></ErrorMessage>

        <FoodItems items={fooditems} />
      </Container>
      <Container>
        <p>The given above lists are the healthy foods.</p>
      </Container>
    </>
  )
}

export default App
