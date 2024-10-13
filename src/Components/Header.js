import React from 'react'
import Logo from '../Assets/Logo.png';

const Header = () => {
  return (
    <header className='bg-light p-3'>
        <div className='d-flex justify-content-between align-items-center px-5'>
            <div className='logo'>
                <img src={Logo} 
                style={{
                    height: '30px',
                    width: '30px',
                    backgroundColor: 'red',}}
                    />
            </div>
            <div className='text-center fw-bold fs-1'>Logo</div>
            <div className='d-flex gap-3'>
                <i className='fas fa-search'></i>
                <i className='far fa-heart'></i>
                <i className='fa fa-shopping-bag'></i>
                <i className='far fa-user'></i>
                <p>ENG  <i className="fas fa-caret-down ml-1"></i></p>
            </div>
        </div>

        {/*navigation bar */}
        <nav className='mt-3 text-center'>
            <ul className='nav justify-content-center link-dark fs-6'>
                <li className='nav-item'><a className='nav-link link-dark' href='#'>Shop</a></li>
                <li className='nav-item'><a className='nav-link link-dark' href='#'>Skills</a></li>
                <li className='nav-item'><a className='nav-link link-dark' href='#'>Stories</a></li>
                <li className='nav-item'><a className='nav-link link-dark'href='#'>About</a></li>
                <li className='nav-item'><a className='nav-link link-dark' href='#'>Contact Us</a></li>
            </ul>
        </nav>
    </header>  
  )
}

export default Header