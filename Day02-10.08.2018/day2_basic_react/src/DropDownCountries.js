import React from 'react';



//this.countries = getContriesList();

const dropDownCountries = ( p ) => {

    return (
            <select>  {
                (p.getContriesList.length>0) ? 
                p.getContriesList.map((element, index) => {
                return <option key={index} value={element.name}>{element.name}</option>
              }) 
              : ''
              }             
                 
            </select>
    )
};

export default dropDownCountries;