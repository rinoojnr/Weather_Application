import React from 'react';

import "../../Pages/Home/Home.css";

const Home = () => {
  return (
    <div className='home-page-container'>
        <div className='home-page-subcontainer'>
            <div className='search-section'>
                <input className='search' type="text" defaultValue="Search for places...">
                </input>
            </div>
        </div>
    </div>
  )
}

export default Home