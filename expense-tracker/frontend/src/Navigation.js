import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <div className="navigation">
            <Link to="/">
            <h4 className="navigation_element">Home</h4>
            </Link>
            <Link to="/expense">
            <h4 className="navigation_element">Expense</h4>
            </Link>
            <Link to="/categories">
            <h4 className="navigation_element">Categories</h4>
            </Link>
        </div>
    );
}

export default Navigation;