import React from 'react';
import Nav from './Nav';

const NavLinks = () => {
  return (
    <>
      <Nav name="Home" to="/" iconName="home" />
      <Nav name="Events" to="/events" iconName="event" />
      <Nav name="Services" to="/services" iconName="service" />
      <Nav name="Discography" to="/discography" iconName="glass" />
      <Nav name="gallery" to="/gallery" iconName="images" />
      <Nav name="Video" to="/video" iconName="video" />
      <Nav name="Blog" to="/blog" iconName="blog" />
      <Nav name="Contact" to="/contact" iconName="contact" />
      <Nav name="Abuot Me" to="/abuot" iconName="about" />
    </>
  );
};

export default NavLinks;
