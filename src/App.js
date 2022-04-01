import './App.css';
import { useState } from 'react';
import { fetchData } from './services/constants';
import Input from './components/Input';
function App() {

  // const [weatherData, setWeatherData] = useState({
  //   weather: {},
  //   value: ''
  // })
  const [weatherData, setWeatherData] = useState({  })
  const [value, setValue] = useState('')

  const handleChange = (event)=>{
    setValue(event.target.value)
  }

  const handleSubmit = ()=>{
    event.preventDefault();
    const forecast = fetchData(value) // api call
    setWeatherData(forecast)
  }

  return (
    <div className="App">
      <Input value = {value}
             onChange = {(e) => handleChange(e)}
             handleSubmit = {(e) => handleSubmit(e)}
      />
    </div>
  );
}

export default App;



