import Country from "./Country";

const VisitedCountryList = ({visitedCountries, handleCheckChange})=> {
    return (
        <>
            <h3>Visited Countries</h3>
            <ul>
                {visitedCountries.map(country => <Country key = {country.id} name={country.name} id={country.id} handleCheckChange={handleCheckChange}/>)}
            </ul>
        </>
    );
}

export default VisitedCountryList;