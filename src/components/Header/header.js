import React, {useState, useEffect} from 'react';
import './header.scss'

//API KEY 6c69fc4731444a310cad36bbdfcd957b

function Header(){
    let [weatherData, setWeatherData] = useState('')
    let [city] = useState('VietNam')

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c69fc4731444a310cad36bbdfcd957b`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setWeatherData(data);
        });
    },[city]);

    let name;
    let weatherMain;
    let icon;
    let humidity;
    let pressure;
    if(weatherData) {
        name = weatherData.name;
        weatherMain = weatherData.weather[0].main;
        icon = weatherData.weather[0].icon;
        humidity = weatherData.main.humidity;
        pressure = weatherData.main.pressure;
    }
    // const weatherIcon = {
    //     backgroundImage: 'url(http://openweathermap.org/img/w/'+icon+'.png)',
    // }
    return (
        <div className="header-wrapper text-center">
            <h3>{name}</h3>
            <img alt={weatherMain} src={'http://openweathermap.org/img/w/'+icon+'.png'}/>
            <div>{weatherMain}</div>
            <div>Huminity: {humidity}</div>
            <div>Pressure: {pressure}</div>
        </div>
    )

}

export default Header;

