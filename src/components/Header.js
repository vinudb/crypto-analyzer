import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1 className="titles">Top Coins</h1>
        <div className='navigationContainer'>
            <NavLink to='/' activeClassName="isActive" className="navLink" exact>Market Overview</NavLink>
            <NavLink to='/liquidity' activeClassName="isActive" className="navLink" exact>Liquidity Analysis</NavLink>
        </div>
    </div>
);

export default Header;