import React, { useState, useEffect } from 'react';
import './App.css';
import FilterComponent from './components/filter';
import MailList from './components/mailList';

function App() {
  const [filteredZipcode, setFilteredZipcode] = useState(''); 
  const [mailData, setMailData ] = useState([]);

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'galaxy-ap-name': '2ca67891-c21d-40bd-aa98-d2881eee6882',
        'galaxy-ap-password': '552a53af188c4e2690b34d6890644b2e',
        'galaxy-search-type': 'DevAPIAddressID',
      }
    }
    
    const apiUrl = `https://devapi.endato.com/Address/Id`;

    axios.post( apiUrl, {
      headers: {
        ...options.headers,
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });
  }, [third])
  



  // const mails = [
  //   {id: 1, mail: 'mail01@gmail.com', zipcode: 101023},
  //   {id: 2, mail: 'mail02@outlook.com', zipcode: 111118},
  //   {id: 3, mail: 'mail03@aol.com', zipcode: 151112},
  //   {id: 4, mail: 'mail04@ymail.com', zipcode: 181113},
  //   {id: 5, mail: 'mail@mail.com', zipcode: 181114},
  // ]

  console.log('App zipcode: ', filteredZipcode)

  return (
    <div className="container px-8 py-8  mx-auto">
      <h1 className='mb-10'>Filter Mail by Zipcodes</h1>
      <FilterComponent onZipcodeChange={setFilteredZipcode} />
      <div className="flex flex-row flex-wrap justify-around">
        <MailList mail={mails} title="Aol" filterZipcode={filteredZipcode}/>
        <MailList mail={mails} title="gmail" filterZipcode={filteredZipcode}/>
        <MailList mail={mails} title="outlook" filterZipcode={filteredZipcode}/>
        <MailList mail={mails} title="ymail" filterZipcode={filteredZipcode}/>
      </div>
    </div>
  );
}

export default App;
