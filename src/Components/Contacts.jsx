import React from 'react';
import ContactCard from './ContactUserCard.jsx';
import ContactUserCard from './ContactUserCard.jsx';

function Contacts() {
  const contacts = [{
    name: 'Jordan Walker',
    description: 'React Creator'
  }];

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRow: 'repeat(2,auto)',
    gap: '10px',
    padding: '60px',
    maxWidth:'600px',
    marginLeft:'10px',
    marginRight:'0',
    border: '1px solid #ccc',
  };

  return (
    <div style={containerStyle}>
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </div>
  )
}
export default Contacts;
	
	
