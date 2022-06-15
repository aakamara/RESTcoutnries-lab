import Country from "./Country";

const CountryList = ({countries, handleCheckChange})=> {
    return (
        <>
            <h3>All Countries</h3>
            <ul>
                {countries.map(country => <Country key = {country.id} name={country.name} id={country.id} handleCheckChange={handleCheckChange}/>)}
            </ul>
        </>
    );
}

export default CountryList;