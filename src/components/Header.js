import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1 className="titles">Crypto Analyzer</h1>
        <div className='navigationContainer'>
            <NavLink to='/' activeClassName="isActive" className="navLink" exact>Market Overview</NavLink>
            <NavLink to='/liquidity' activeClassName="isActive" className="navLink" exact>Liquidity Analysis</NavLink>
        </div>
    </div>
);

export default Header;