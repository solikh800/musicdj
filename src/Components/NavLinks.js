import React from 'react';
import Nav from './Nav';

const NavLinks = ({onClick}) => {
  return (
    <div className="md:flex">
      <Nav name="Home" to="/" iconName="home" onClick={onClick} />
      <Nav name="Events" to="/events" iconName="event" onClick={onClick} />
      <Nav
        name="Services"
        to="/services"
        iconName="service"
        onClick={onClick}
      />
      <Nav
        name="Discography"
        to="/discography"
        iconName="glass"
        onClick={onClick}
      />
      <Nav name="gallery" to="/gallery" iconName="images" onClick={onClick} />
      <Nav name="Video" to="/video" iconName="video" onClick={onClick} />
      <Nav name="Blog" to="/blog" iconName="blog" onClick={onClick} />
      <Nav name="Contact" to="/contact" iconName="contact" onClick={onClick} />
      <Nav name="Abuot Me" to="/abuot" iconName="about" onClick={onClick} />
    </div>
  );
};

export default NavLinks;
