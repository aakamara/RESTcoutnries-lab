import React from 'react';

const Country = ({name, id, removeCountry})=> {
    return (
        <li key={id}>{name} <button onClick={()=>{removeCountry(id)}}> Remove </button></li>
    );
}

export default Country;