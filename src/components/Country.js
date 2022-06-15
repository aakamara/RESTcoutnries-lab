import React from 'react';

const Country = ({name, id, handleCheckChange})=> {
    return (
        <li key={id}>{name} <input type="checkbox" onChange={handleCheckChange}></input></li>
    );
}

export default Country;