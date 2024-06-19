import { useEffect, useState } from "react";

export default function Header(){
    const [isOpen, newState] = useState(false);

    let nav = document.querySelector('nav');

    useEffect(() => {
        if(nav){
            nav.classList.toggle('open');
        }
    });

    return(
        <header>
            <div className="container">
                <a href="#top" id="logo"><i>Diachuk</i></a>
                <span className='burger' onClick={() => newState(!isOpen)}></span>
                <nav>
                    <ul>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#pet-projects">Pet-projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    <a className='button' href='https://drive.google.com/drive/folders/1X6RbUwmYLPxcLMZLg90AtEzaqJfXiWUz?usp=sharing' target='_blank' rel='noreferrer'>My CV</a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}