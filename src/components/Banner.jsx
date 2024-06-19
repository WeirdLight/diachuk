import my_photo from '../images/photo.jpg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

export default function Banner(){
    return(
        <section className="banner">
            <div className="container">
                <img src={my_photo} alt="me" />
                <div className="me">
                    <span>
                        <h1>Kateryna Diachuk</h1>
                        <p>Trainee Front-End developer</p>
                    </span>
                    <div className="social">
                        <p>Find me on:</p>
                            <span>
                                <a href="https://www.linkedin.com/in/kateryna-diachuk-bb3601284/" target='_blank' rel='noreferrer'><img src={linkedin} alt="linkedin" /></a>
                                <a href="https://github.com/WeirdLight" target='_blank' rel='noreferrer'><img src={github} alt="github" /></a>
                            </span>
                    </div>
                </div>
            </div>
        </section>
    );
}