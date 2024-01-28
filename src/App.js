
import {  useState} from 'react';
import './App.css';
import './stylesheet.css'
import axios from 'axios';

function App() {
  const apiKey="323a5838a5bc74aabc243e7ee126511f"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      // console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }

  return (
    <>
    <div className="container1">
      <h1>Weather App</h1>
      <form >
        <div className="inputbox">
        <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
        <br />
        <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        <div className="city">
          {data?.name}
        </div>
        <div className="temp">
          {(((data?.main?.temp)-273)).toFixed(2) } Celcius
        </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
