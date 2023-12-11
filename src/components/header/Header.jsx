import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <div className='header'>
        <div className='header__wrap container'>
            <div className='logo'>
                <Link to="/">MovieMania</Link>

            </div>
            <ul id="header" className='header__nav'>
                <li><Link to="/movies/popular">Popular</Link></li>
                <li><Link to="/movies/top_rated">Top Rated</Link></li>
                <li><Link to="/movies/upcoming">Upcoming</Link></li>
            </ul>

        </div>

    </div>
  )
};

export default Header;