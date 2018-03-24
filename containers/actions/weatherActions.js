import * as api from '../services/weatherApi';
const query = 'fresno';
export const fetchWeather = () => {
    fetch(`http://MetaWeather.com/api/location/search/?query=${query}`)
    .then(data => (data.json()))
    .then(data => {
      console.warn(data)
      return data
    })
};
