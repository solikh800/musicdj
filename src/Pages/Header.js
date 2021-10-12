import React from 'react';
import Nav from '../Components/Nav';

function NavBar() {
  return (
    <div className="flex flex-row fixed z-10">
      <button className="bottom-2 text-white my-6 w-32">MUSIC ALLY</button>
      <div className="flex xl:row-auto my-6 mx-6 ">
        <Nav name="Home" to="/" />
        <Nav name="Abuot Me" to="/abuot" />
        <Nav name="Blog" to="/blog" />
        <Nav name="Contact" to="/contact" />
        <Nav name="Events" to="/events" />
        <Nav name="Discography" to="/discography" />
        <Nav name="Services" to="/services" />
        <Nav name="Video" to="/video" />
        <Nav name="gallery" to="/gallery" />
      </div>
    </div>
  );
}

export default NavBar;
