import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer.jsx';
import Display from './components/Display.jsx'
import { useState } from 'react';

function App() {
  let [calValue, setcalValue] = useState("");
  const onButtonClick = (buttonText) => {  
      // console.log(buttonText)
      if (buttonText === 'c'){
        setcalValue("");
      }
      else if (buttonText === '='){
        const result = eval(calValue);
        setcalValue(result);

      }
      else{
        const newDisplayValue = calValue + buttonText;
        setcalValue(newDisplayValue);
      }
    };

 return (
    <div className= {styles.calculator}>
      <Display displayValue={calValue}/>
      <ButtonsContainer onButtonClick = {onButtonClick} />
    </div>
  )
}

export default App
