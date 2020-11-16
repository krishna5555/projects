import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState(["All"]);
  const [category, setCategory] = useState("All");

  const findCategories = () => {
    items.map(item => {
      if(categories.indexOf(item.category)==-1){
        categories.push(item.category);
        console.log(categories);
      }     
    });
    setCategories(categories);
    setLoaded(true);
  }

  useEffect(() => {
    findCategories();
  });

  const filterMenu = (categorySelected) => {
    setCategory(categorySelected);
  }

  if(loaded){
    return <div className="menu">
      <center>
        <h1 className="title">Menu</h1>
        <h1 className="underline" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={items} category={category} />
      </center>
    </div>;
  } else{
    return <></>
  }
}

export default App;
