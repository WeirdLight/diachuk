import my_photo from './images/photo.jpg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import flower from './images/flower-design.png';
import nexcent from './images/nexcent.png';
import firebase from './images/firebase.svg';

export default function App(){
  return(
    <>
      <header>
        <div className="container">
          <a href="#top" id="logo"><i>Diachuk</i></a>
          <span className='burger'></span>
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
      <section id='about-me'>
        <span>
          <hr />
          <h2>About me</h2>
          <hr />
        </span>
        <p>I'm a third-year Cybersecurity student at the National 
          Aviation University. While I currently don't have formal 
          work experience, I have developed several pet-projects 
          and I'm actively honing my skills in this field. I can 
          create responsive web pages and I'm detail-oriented with 
          strong analytical thinking and teamwork abilities.</p>

          <p>Scroll down <span></span></p>
      </section>
      <section id="skills">
        <span>
          <hr />
          <h2>My Skills</h2>
          <hr />
        </span>
        <p>I have completed <a target='_blank' rel='noreferrer' href="https://certs.prometheus.org.ua/downloads/d96c22dbb97f43c683ebc918c490029a/Certificate.pdf">
          the Prometheus "Front-End Development" course
          </a>, where I learnt <span>HTML, CSS, and JavaScript</span>. Additionally, I'm 
          independently studing <span>React and SCSS/SASS</span>.</p>
      </section>
      <section id="pet-projects">
          <span>
            <hr />
            <h2>Pet-Projects</h2>
            <hr />
          </span>
          <div className="project">
            <div className='project-image'>
              <img src={flower} alt="flower-design" />
              <div className='links'>
                <p>Open on:</p>
                <ul>
                  <li><a href="https://flower-design-kate-diachuk.web.app/" target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                  <li><a href="https://github.com/WeirdLight/flower-design" target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                </ul>
              </div>
            </div>
            <div>
              <h2>Flower Design</h2>
              <p>HTML, CSS, JavaScript</p>
              <span>
                <p>Open on:</p>
                <ul>
                  <li><a href="https://flower-design-kate-diachuk.web.app/" target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                  <li><a href="https://github.com/WeirdLight/flower-design" target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                </ul>
              </span>
              <p>
                This project was created as a coursework assignment for the Prometheus 
                "Front-End Development" course.
                <br /><br />
                The webpage is dedicated to a flower shop, where users can browse the 
                flower catalog and leave their feedback about the shop.
                <br /><br />
                During the creation of this project, I reinforced my knowledge of creating 
                responsive layouts and gained my first practical skills in HTML/CSS and JavaScript.
              </p>
            </div>
          </div>
          <div className="project">
            <div className='project-image'>
              <img src={nexcent} alt="flower-design" />
              <div className='links'>
                <p>Open on:</p>
                <ul>
                  <li><a href="https://nexcent-kate-diachuk.web.app/" target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                  <li><a href="https://github.com/WeirdLight/nexcent" target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                </ul>
              </div>
            </div>
            <div>
              <h2>Nexcent</h2>
              <p>HTML, CSS, JavaScript</p>
              <span>
                <p>Open on:</p>
                <ul>
                  <li><a href="https://nexcent-kate-diachuk.web.app/" target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                  <li><a href="https://github.com/WeirdLight/nexcent" target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                </ul>
              </span>
              <p>
                The webpage is dedicated to an IT company, where users can register and 
                read the company's blog, with articles displayed randomly.
                <br /><br />
                During the creation of this project, I learned how to create an attractive 
                banner and continued to practice my markup skills.
              </p>
            </div>
          </div>
          <a id='end' href='https://github.com/WeirdLight?tab=repositories' target='_blank' rel='noreferrer'>Click here to view more</a>
      </section>
      <footer id='contacts'>
        <span>
            <hr />
            <h2>Contacts</h2>
            <hr />
        </span>
        <span className='contacts'>
          <ul>
            <li>Live in Kyiv, Ukraine</li>
            <li>Email: <a href="mailto:diachukkateryna78@gmail.com">diachukkateryna78@gmail.com</a></li>
            <li>Tel.: <a href="tel:+380960541425">+380960541425</a></li>
          </ul>
        </span>
      </footer>
    </>
  );
}
