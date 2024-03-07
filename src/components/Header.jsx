import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Header() {
    const location = useLocation();
    return (
        <div className='inline-block header'>
            {/* This link imports the navbar component and links the page to the header nav link */}
            <Navbar
                //These links send the user to the cooresponding nav page
                links={[
                    <Link key={1} to={''} style={{ margin: '10px' }} className={location.pathname === '/' ? 'active-link nav-link' : 'nav-link'}>About Me</Link>,
                    <Link key={2} to={"Contact"} style={{ margin: '10px' }} className={location.pathname === 'Contact' ? 'active-link nav-link' : 'nav-link'}>Contact</Link>,
                    <Link key={3} to={"Portfolio"} style={{ margin: '10px' }} className={location.pathname === 'Portfolio' ? 'active-link nav-link' : 'nav-link'}>Portfolio</Link>,
                    <Link key={4} to={"Resume"} style={{ margin: '10px' }} className={location.pathname === 'Resume' ? 'active-link nav-link' : 'nav-link'}>Resume</Link>,
                ]}
            />
        </div>
    );
}