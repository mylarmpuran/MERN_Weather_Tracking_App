import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import App from './api.js'
import { WiCelsius } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

const api = {
    key: '3d5c79728cc7d67fafc6f3353d84a474',
    base: 'http://api.openweathermap.org/geo/1.0/',
};


function Weather() {


    const [search, setSearch] = useState('London');
    const [weather, setWeather] = useState(App)

    // useEffect( () => {
    //     axios
    //     .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}&units=metric`)
    //     .then(res => {
    //         console.log(res)
    //         setWeather(res.data)    

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // } )

    // const searchPressed = () => {
    //     axios
    //     .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}&units=metric`)
    //     .then(res => {
    //         console.log(res)  
    //         setWeather(res.data)         

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        
        <div className='grid justify-items-center'>

            <div className='h-full w-96 p-10 bg-cyan-400 object-center rounded-md'>
                <div className='text-4xl font-bold text-red-900'>
                    <h1 > Weather App </h1>
                </div>
                <div className='h-20 w-full py-10 flex justify-center'>
                    <input className='box-content h-2 w-32 p-4 rounded-full'
                    type="text"
                    placeholder='Enter location...'
                    onChange={(e) => setSearch(e.target.value)} id="site-search" name="q"></input>
                </div>

                {/* <button className='bg-indigo-500 opacity-100 rounded-lg'
             onClick={searchPressed}>Search</button> */}


                {/* LOCATION DETAIL */}

                <div className='h-20 w-full p-5  '>
                    <div>
                        <label className='text-2xl font-bold'>LOCATION</label>
                        <h1>{weather.name}</h1>
                    </div>

                </div>

                {/* //Temp  */}

                <div className='h-20 pt-5 flex-col  justify-center'>
                    <div className='text-2xl font-bold '>Temperature</div>
                    <div className='pt-3 flex flex-row justify-center'>
                        <div >{weather.main.temp}</div>
                        <div><WiCelsius color="#023373" size="30px" /></div>
                    </div>
                </div>

                <div className='h-25 py-5 flex flex-row '>
                    {/* //Humidity  */}
                    <div className='h-10 w-20 basis-1/2 col-spa'>
                        <div className='flex justify-evenly content-center'>
                            <div className='pt-2'><WiHumidity color="#023373" size="30px" /></div>
                            <div>{weather.main.humidity}
                                <p>Humidity</p>
                            </div>
                        </div>

                    </div>

                    {/* //Wind speed  */}

                    <div className='basis-1/2 col-spa'>
                        <div className='flex justify-evenly content-center'>
                            <div className='pt-2'><WiStrongWind color="#023373" size="30px" /></div>
                            <div className='flex flex-col'>
                                <p>{weather.wind.speed} km/hr</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Weather;
// hello 