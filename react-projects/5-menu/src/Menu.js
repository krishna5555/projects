import React from 'react';
import MenuCard from './MenuCard';

const Menu = ({items, category}) => {
  if(category != "All"){
    return <div className="menu">
      {items.map((item) => (
        <div>
          {(item.category == category) ? <MenuCard item={item} />: <></>}
        </div>
      ))}
    </div>
  } else{
    return <div className="menu">
      {items.map((item) => (
        <MenuCard item={item} />
      ))}
    </div>
  }
};

export default Menu;
