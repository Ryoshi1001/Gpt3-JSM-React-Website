import React from 'react';
import { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3Logo.png';


//BEM -- Block Element Modifier

//making function for navbar mobile menu
const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatGPT3'>What is GPT</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>  
  </>
)

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <div className="gpt3__navbar">

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign-in'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>

        {mobileMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => {setMobileMenu(false)}} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => {setMobileMenu(true)}}/>
        }
        
        {/* if the menu is open/toggles if its true render the <>  */}
        {mobileMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign-in'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
