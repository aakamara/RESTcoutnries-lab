import './App.css';
import {useRef, useEffect} from 'react';
import usePersistedState from './components/usePersistedState';
import CountryList from './components/CountryList';


function App() {
  const [countries, setcount] = usePersistedState('countries', []);

  
  const [countryId, setCountryId] = usePersistedState('countryId', 0);
  const inputValueRef = useRef();
  
  const handleAddCountry = () => {
    const name = inputValueRef.current.value;
    if (name === '') return;
    setCountries(prevCountries => [...prevCountries, { name: name, id: countryId }]);
    setCountryId(id => id += 1);
    inputValueRef.current.value = '';
  }

  const handleClearAll = (e) => {
    setCountries((prev) => []);
  }

  const removeCountry = (id) => {
    setCountries(prev => prev.filter(country => country.id !== id));
  }

  useEffect(() => {
    document.title = `${countries.length} countries left`;
  }, [countries]);

  useEffect(() => {
    console.log(`countryId: `, countryId);
    console.log(`countries: `, countries);
  }, [countries, countryId]);

  return (
    <div className="App">
      <h1>Darth Vader's Country List ▼皿▼</h1>
      <p>I really must remember to...</p>
      <hr />
      <CountryList countries={countries} removeCountry={removeCountry} />
      <hr />
      <input ref={inputValueRef} type="text" ></input><button
        onClick={handleAddCountry}>Add Country</button><button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default App;
