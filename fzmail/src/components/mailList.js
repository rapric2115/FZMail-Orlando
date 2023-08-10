import React from 'react';

const MailList = ({ mail, title, filterZipcode }) => {
  // Helper function to extract email type
  const getEmailType = (email) => {
    const atIndex = email.lastIndexOf('@');
    if (atIndex !== -1) {
      const domain = email.substring(atIndex + 1);
      return domain.replace('.com', ''); // Remove the ".com" suffix
    }
    return '';
  }

  const filteredMails = mail.filter(item => {
    const matchesZipcode = filterZipcode === '' || item.zipcode === parseInt(filterZipcode);
    const matchesTitle = title.toLowerCase() === getEmailType(item.mail).toLowerCase();
    return matchesZipcode && (matchesTitle || title.toLowerCase().includes(getEmailType(item.mail).toLowerCase()));
  });

  console.log('mail list: ', filteredMails);

  return (
    <div className="shadow-md rounded mx-2 mailWidth p-5">
      <h2 className='text-center mb-3'>{title}</h2>
      <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
        {filteredMails.map((item, i) => (
          <li key={i} className='text-center'>{item.mail}</li>
        ))}
      </ul>
    </div>
  );
}

export default MailList;
