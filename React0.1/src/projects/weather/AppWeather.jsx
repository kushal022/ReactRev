import React, { useCallback } from 'react'
import { useState } from 'react'
import Display from './Display';
import { useEffect } from 'react';
import Forecast from './Forecast';
import './style.css'


const AppWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('')
  const [coords, setCoords] = useState('')
  const [forecast, setForecast] = useState('')
  // const API_KEY = 'b3d0c6774971b9f7d2daa126773f09da'
  // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; //^ use for CRA app
  const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY; //^ use for VITE app: this is how import env variables in components
  // console.log(API_KEY)

  //^Get Coordinates: auto
   useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
    },(err)=>{
      console.log(err)
      alert('Allow to access your location by weather app')
    })
   },[])

   //^Fetch weather by coords: auto
   useEffect(()=>{
    if(!coords)return
   const fetchAuto = async()=>{
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      console.log('Error in fetch auto weather', error)
    }
   }
   fetchAuto()
   },[coords])

  //^Fetch Forecast by coords: auto
    useEffect(() => {
    if (!coords) return;
    const fetchForecast = async () => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setForecast(data);
        // console.log(data);
      } catch (err) {
        console.log("Error in fetch forecast data", err);
      }
    };
    fetchForecast();
  }, [coords]);

   //^Fetch weather by city:
  const fetchWeatherByCity = async()=>{
    if(!city) return
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      // console.log(data)
      setWeather(data)
    } catch (error) {
      console.log('Error in fetch weather', error)
    }
  }

  //^Fetch Forecast by city:
  const fetchForecastByCity = async ()=>{
    if(!city) return
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&usnits=metric`);
      const data = await res.json();
      setForecast(data)
    } catch (error) {
      console.log('Error in fetch Forecast by city name: ', error)
    }
  }

  //^ handle search:
  const handleSearch = ()=>{
    fetchForecastByCity()
    fetchWeatherByCity()
  }
  // console.log(weather)
  return (
    <div>
      <h5></h5>
      <div className='inputBox'>
        <input 
          type="text" 
          placeholder='enter city..'
          value={city}
          onChange={e=>setCity(e.target.value)}
        />
        <button onClick={()=>handleSearch()} >Search</button>
      </div>
      {weather && <Display weather={weather}/>}
      {forecast && <Forecast forecast={forecast}/>}
    </div>
  )
}

export default AppWeather