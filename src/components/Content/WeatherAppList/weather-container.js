import React, {useState, useEffect} from 'react';
import './weatherapplist.scss'

//api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid={your api key}

function WeatherContainer() {
    let [weatherData, setWeatherData] = useState('')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=6c69fc4731444a310cad36bbdfcd957b`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setWeatherData(data);
        });
    },[]);

    let daily;
    let dailyItm;
    if(weatherData){
        daily = weatherData.daily;
        dailyItm = daily.slice(1,8).map((days, index) => 
            <li key={index}>              
                <div className="text-center"><img alt={days.weather[0].main} src={'http://openweathermap.org/img/w/'+days.weather[0].icon+'.png'}/></div>
                <div>{days.weather[0].description}</div>
                <div>Humidity: {days.humidity}</div>
            </li>
        );
    }

    return(
        <div className="weather-container">
            <ul className="list-inline weather-container__list">
              {dailyItm}  
            </ul>
        </div>
    )
}

export default WeatherContainer;
