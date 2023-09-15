import React from 'react';

function ContactUserCard({ name,description }) {
  const profileImage = `https://physics.unc.edu/wp-content/uploads/sites/218/2021/04/BlankPerson.png`;

  const containerStyle = {
    display:'flex',
    alignItem:'center',

  }
  
  const imageStyle = {
    width:'200px',
    height:'200px',
    boarderRadius:'50%',
    objectFit:'cover',
    marginRight: '10px',
  }

  const textContainerStyle = {
    display:'flex',
    flexDirection: 'column',
  }

  const descriptionStyle = {
    fontWeight:'bold',
  }

  return (
    <div className="contact-user-card" style={containerStyle}>
      <img src={profileImage} alt={`${name}`} style={imageStyle} />
      
      <div style={textContainerStyle}>
      <p>
      <h2>{name}</h2>
      <span style={descriptionStyle}>React Creator</span>
        <br />
        <span style={{fontSize: '12px'}}>Lorem Ipsum</span>
      </p>
      </div>
    </div>
  );
}

export default ContactUserCard;
