import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavMenu.scss';

function NavMenu(props) {
    const location = useLocation()

    return (
        <div>
            <ul className="nav-menu">
                <li className={`nav-menu__btn${location.pathname === '/' || location.pathname === '/home' ? ' active' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`nav-menu__btn${location.pathname === '/game' ? ' active' : ''}`}>
                    <Link to="/game">Game</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavMenu;