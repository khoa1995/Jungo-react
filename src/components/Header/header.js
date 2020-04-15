import React, {useState, useEffect} from 'react';

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
    let humandity;
    let wind;
    let pressure;
    if(weatherData) {
        name = weatherData.name;
        weatherMain = weatherData.weather[0].main;
        icon = weatherData.weather[0].icon;
    }

    return (
        <div className="header-wrapper">
            {name}
        </div>
    )

}

export default Header;

