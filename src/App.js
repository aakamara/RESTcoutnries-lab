import './App.css';
import {useRef, useEffect, useState} from 'react';
import usePersistedState from './components/usePersistedState';
import CountryList from './components/CountryList';
import VisitedCountryList from "./components/VisitedCountryList"


function App() {

  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState(0);
  const [visitedCountries, setVisitedCountries] = usePersistedState("visitedCountries", [])
  const inputValueRef = useRef();
  

  const fetchData = () => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => setCountries(data))
  }

  useEffect(() => {
    fetchData()
  },[])

  // const handleAddCountry = () => {
  //   const name = inputValueRef.current.value;
  //   if (name === '') return;
  //   setCountries(prevCountries => [...prevCountries, { name: name, id: countryId }]);
  //   setCountryId(id => id += 1);
  //   inputValueRef.current.value = '';
  // }

  // const handleClearAll = (e) => {
  //   setCountries((prev) => []);
  // }

  // const removeCountry = (id) => {
  //   setCountries(prev => prev.filter(country => country.id !== id));
  // }

  const handleChecked = (country) => {
    setVisitedCountries(prev => [...prev, country])
  }

  const handleUnchecked = (id) => {
    setVisitedCountries(prev => prev.filter(country => country.id !== id));
  }

  const handleChangeCheck = () => {
    // if checkbox is checked run handleChecked
    // else handleUnchecked
    // handleChecked()
  }

  return (
    <div className="App">
      <h1>Bucket List</h1>
      <CountryList countries={countries} handleCheckChange={handleChangeCheck}/>
      <VisitedCountryList visitedCountries={visitedCountries} handleCheckChange={handleChangeCheck}/>

    </div>
  );
}

export default App;
