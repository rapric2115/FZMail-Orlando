import React, { useState } from 'react';

const FilterComponent = ({onZipcodeChange}) => {
    const [zipcode, setZipcode ] = useState('');

    const handleZipcodeChange = (event) => {
        const newZipcode = event.target.value;
        setZipcode(newZipcode);
        onZipcodeChange(newZipcode);
    }
    return(
        <form className='my-10'>
            <label className="block">
            <span className="block text-sm font-medium text-slate-700 py-5">Filter By Zipcode</span>
            <input 
                className="border-2 rounded-md border-gray-300 placeholder-slate-400 px-2" 
                placeholder='ZIPCODE'
                value={zipcode}
                onChange={handleZipcodeChange}
          />
            <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
            </p>
            </label>
        </form>
    )
}


export default FilterComponent;