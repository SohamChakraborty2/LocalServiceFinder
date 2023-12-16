import '../../styles/Application/application.css'
import React, { useState } from 'react';

const Application = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [placeInput, setPlaceInput] = useState('');
    const [radiusInput, setRadiusInput] = useState('');
    const [currentResults, setCurrentResults] = useState([]);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setUserLocation(location);
                    searchPlaces(location);
                },
                error => {
                    alert('Error getting user location: ' + error.message);
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };
    const searchPlaces = location => {
        if (!placeInput || !radiusInput) {
            alert('Please enter both a place and a search radius.');
            return;
        }

        // Replace 'YOUR_API_KEY' with your actual Google Maps API key
        const API_KEY = 'AIzaSyCGP-pMZod2my5TKg5UqjCSH38lD8BvC-Y';
        const apiUrl = 'http://localhost:3001/maps-api/place/textsearch/json?query=hotel&radius=2000&location=28.6861798,77.2749852&key=AIzaSyCGP-pMZod2my5TKg5UqjCSH38lD8BvC-Y';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                setCurrentResults(data.results);
            })
            .catch(error => {
                console.error('Error in text search:', error);
                alert('Error in text search: ' + error.message);
            });
    };

    const displayResults = () => {
        return currentResults.map((place, index) => (
            <div key={index} className="result-item">
                <h3>{place.name}</h3>
                <p>{place.formatted_address}</p>
            </div>
        ));
    };

    return (
        <div className="search-container">
            <label htmlFor="place-input">Enter a place:</label>
            <input
                type="text"
                id="place-input"
                placeholder="e.g., coffee shop, restaurant"
                value={placeInput}
                onChange={e => setPlaceInput(e.target.value)}
            />

            <label htmlFor="radius-input">Enter a search radius (in meters):</label>
            <input
                type="number"
                id="radius-input"
                placeholder="e.g., 500"
                value={radiusInput}
                onChange={e => setRadiusInput(e.target.value)}
            />

            <button onClick={getUserLocation}>Use My Location</button>

            <div id="results">{displayResults()}</div>
        </div>
    );
};

export default Application;
