import React from 'react'

import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
export default function  Header (){
    return(
        <div className='inline-block'>
            <h1>Sawyer Baldwin Portfolio</h1>
            <Navbar
                links={[
                    <Link key={1} to={''}>About Me</Link>,
                    <Link key={2} to={"Contact"}>Contact</Link>,
                    <Link key={3} to={"Portfolio"}>Portfolio</Link>,
                    <Link key={4} to={"Resume"}>Resume</Link>,
                ]}
            />
        </div>
    );
}