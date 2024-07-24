"use client";

import '../app/Home.css';
import twitter from '../app/img/twitter.svg';
import linkedin from '../app/img/linkedin.svg';
import github from '../app/img/github.svg';
import instagram from '../app/img/insta.svg';
import Image from 'next/image';

export default function Links() {
    return (
        <>
            <div className="flex justify-center items-start space-x-4 pt-4 social-links">
                <a href="https://www.linkedin.com/in/dimitar-kolev-47896b6a/" className='social-media' target="_blank" rel='noreferrer'>
                    <Image src={linkedin} alt="Linkedin"/>
                </a>
                <a href="https://github.com/jimmykolev" className='social-media' target="_blank" rel='noreferrer'>
                    <Image src={github} alt="Github"/>
                </a>
            </div>
        </>
    );
}