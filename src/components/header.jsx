import React from 'react';
import Logo from "../img/Rectangle.svg"

const Header = () => {
    return (
        <div>
            <header id='header'>
               <div className='container'>
                <div className='header'>
                    <img src={Logo}/>
                    <div className='header--navbar'>
                       <a href='#'>Home</a>
                       <a href='#'>Recipes</a>
                       <a href='#'>Meat</a>
                       <a href='#'>About</a>
                       <a href='#'>Blog</a>
                       <a href='#'>Support</a>
                    </div>
                    <div className='header--btn'>
                        <button>Sign in</button>
                        <button>Request demo</button>
                    </div>
                </div>
               </div>
            </header>
        </div>
    );
};

export default Header;