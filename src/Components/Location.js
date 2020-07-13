import React, {Component} from 'react';

async function Location() {
    const response = fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=8a5ef08ed5c0d2cb0672425f4f244986'
        , {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(response)
            })
    return (
        response.json()
    )
}

export default Location;