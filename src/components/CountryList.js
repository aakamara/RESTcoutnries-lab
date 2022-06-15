import Country from "./Country";

const TodoList = ({countries, removeCountry})=> {
    return (
        <ul>
            {countries.map(country => <Country key = {country.id} name={country.name} id={country.id} 
            removeCountry={removeCountry} />)}
        </ul>
    );
}

export default CountryList;