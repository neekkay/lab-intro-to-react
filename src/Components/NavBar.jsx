import React from 'react';

 
function NavBar() {
	const navStyle = {
	  backgroundColor: 'lightblue',
	  padding: '10px',
	  display: 'flex',
	  justifyContent: 'flex-end',
	  alignItems:'center',
	  
	};
  
	const buttonStyle = {	
	  backgroundColor: '#EBE8E7',
	  color: 'black',
	  border: 'none',
	  padding: '1px 2px',
	  cursor: 'pointer',
	  marginRight:'5px',
	};
  
	return (
	  <nav style={navStyle}>
		<button style={buttonStyle}>What is Pursuit?</button>
		<button style={buttonStyle}>Create an account</button>
		<button style={buttonStyle}>Sign In</button>
	  </nav>
	);
  }

export default NavBar;