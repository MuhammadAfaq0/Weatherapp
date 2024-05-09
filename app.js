window.addEventListener('load', () => {
    document.getElementById('submitBtn').addEventListener('click', () => {
        const apiKey = '559a2ca621515e03cc943acbdc917db6';
        const city = document.getElementById('cityInput').value.trim();

        if (city === '') {
            alert('Please enter a city name.');
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('city').textContent = data.name;
                document.getElementById('date').textContent = new Date().toLocaleDateString();
                document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
                document.getElementById('description').textContent = data.weather[0].description;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });
});
