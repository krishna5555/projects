import React from 'react';

function MenuCard({item}){
    return (
        <article className="menu-item">
          <img src={item.img} className="photo" />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </article>
    );
}

export default MenuCard;