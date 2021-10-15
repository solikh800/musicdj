import React from 'react';
import Nav from './Nav';

const NavLinks = () => {
  return (
    <>
      <Nav name="Home" to="/" />
      <Nav name="Abuot Me" to="/abuot" />
      <Nav name="Blog" to="/blog" />
      <Nav name="Contact" to="/contact" />
      <Nav name="Events" to="/events" />
      <Nav name="Discography" to="/discography" />
      <Nav name="Services" to="/services" />
      <Nav name="Video" to="/video" />
      <Nav name="gallery" to="/gallery" />
    </>
  );
};

export default NavLinks;
