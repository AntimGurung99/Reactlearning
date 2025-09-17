import { useState } from 'react';
import Item from './Item';

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItems,item];
      setActiveItems( newItems);
    }


  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditems={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
