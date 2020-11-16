import React from 'react';

const Categories = ({categories, filterMenu}) => {

  return <div>
    {categories.map(category => (
      <button className="filter-btn" onClick={event => filterMenu(category)}>
        {category}
      </button>
    ))}
  </div>;
};

export default Categories;
