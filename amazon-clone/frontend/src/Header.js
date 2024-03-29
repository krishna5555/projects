import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Header(){
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            {/* logo */}
            <div className="header_logo">Shopping Cart</div>

            {/* search */}
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                {/* sign in */}
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>

                {/* orders */}
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>

                {/* prime */}
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                {/* basket */}
                <div className="header_option">
                    <ShoppingBasket />
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;