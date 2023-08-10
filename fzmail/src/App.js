import React, { useState } from 'react';
import './App.css';
import FilterComponent from './components/filter';
import MailList from './components/mailList';

function App() {
  const [filteredZipcode, setFilteredZipcode] = useState(''); 

  const mails = [
    {id: 1, mail: 'mail01@gmail.com', zipcode: 101023},
    {id: 2, mail: 'mail02@outlook.com', zipcode: 111118},
    {id: 3, mail: 'mail03@aol.com', zipcode: 151112},
    {id: 4, mail: 'mail04@ymail.com', zipcode: 181113},
    {id: 5, mail: 'mail@mail.com', zipcode: 181114},
  ]

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
