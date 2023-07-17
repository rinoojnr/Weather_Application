import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs'

import "../../Pages/Home/Home.css";
// Assets
import sun from "../../../Assets/Images/Sunny.svg";
import rain from "../../../Assets/Images/rainy.svg";
import snow from "../../../Assets/Images/snow.svg";
import cloudy from "../../../Assets/Images/pcloudy.svg";

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [searchingCity, setSearchingCity] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/get_weather_for_loc/${searchingCity}/`, {headers: {}}).then((res) => {
            if(res) {
                setWeatherData(res.data);
            }
        }).catch (() => {
            setWeatherData(null);
        })      
    },[searchingCity]);

    const handleInputChange = (inputValue) => {
        setSearchingCity(inputValue.target.value)
    }

  return (
    <div className='home-page-container'>
        <div className='home-page-subcontainer'>
            <div className='search-section'>
                <input className='search' type="text" placeholder="Search for a city..." onChange={(e) => handleInputChange(e)}>                
                </input>
            </div>
            <div className='weather-section-container'>
                <div className='weather-section'>
                    {weatherData !== null ? (
                        <div className='weather-subsection'>
                            <div className='weather-section1'>
                                <div className='temperature-section-container'>
                                    <div className='temperature-section'>
                                        <h1>{weatherData.temp}</h1>
                                        <h2>o</h2>
                                    </div>
                                    <h1>{weatherData?.weather_desc}</h1>
                                </div>
                                <div className='image-section'>
                                    <img alt='' 
                                    src={weatherData.humidity > 85 ? snow : weatherData.humidity >30 && weatherData.humidity < 50 ? cloudy 
                                        : weatherData.humidity > 50 && weatherData.humidity < 85 ? rain : weatherData.humidity > 0 && weatherData.humidity < 30 ? sun : ''}>                                        
                                    </img>
                                </div>
                            </div>
                            <div className='weather-section2'>
                                <h1>{searchingCity}</h1>
                                <div className='humidity-section'>
                                    <h1>Humidity:</h1>
                                    <h1>{weatherData?.humidity}</h1>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-section'>{searchingCity === null ? "Search for a city and view the weather condiion" : "Search for a valid city"}</div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home