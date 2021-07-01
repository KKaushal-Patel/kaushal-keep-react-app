import React from 'react';

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <>
    <footer className="footer">Copyright @ {year} Kaushal Patel</footer>
    
    </>
  );
}

export default Footer;
