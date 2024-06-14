import my_photo from './images/photo.jpg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';

export default function App(){
  return(
    <>
      <header>
        <div className="container">
          <a href="#" id="logo"><i>Diachuk</i></a>
          <nav>
            <ul>
              <li><a href=".about-me">About me</a></li>
              <li><a href=".skills">Skills</a></li>
              <li><a href=".pet-projects">Pet-projects</a></li>
              <li><a href=".contacts">Contacts</a></li>
              <button>My CV</button>
            </ul>
          </nav>
        </div>
      </header>
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
              <a href="https://www.linkedin.com/in/kateryna-diachuk-bb3601284/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
              <a href="https://github.com/WeirdLight" target='_blank'><img src={github} alt="github" /></a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
