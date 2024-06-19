import flower from '../../images/flower-design.png';
import nexcent from '../../images/nexcent.png'
import Title from '../Title';
import Project from './Project';

export default function PerProjects(){
    let flowerDescr =                 
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

    let nexcentDescr = 
    <p>
    The webpage is dedicated to an IT company, where users can register and 
    read the company's blog, with articles displayed randomly.
    <br /><br />
    During the creation of this project, I learned how to create an attractive 
    banner and continued to practice my markup skills.
    </p>
    return(
        <section id="pet-projects">
            <Title title='Pet-Projects' />
            <Project src={flower} alt='flower-design' fireLink="https://flower-design-kate-diachuk.web.app/" 
            gitLink="https://github.com/WeirdLight/flower-design" title='Flower Design' tech='HTML, CSS, JavaScript'
            descr={flowerDescr}/>
            {/* <div className="project">
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
            </div> */}
            <Project src={nexcent} alt='nexcent' fireLink="https://nexcent-kate-diachuk.web.app/"
            gitLink="https://github.com/WeirdLight/nexcent" title='Nexcent' tech='HTML, CSS, JavaScript'
            descr={nexcentDescr} />
            {/* <div className="project">
            <div className='project-image'>
                <img src={nexcent} alt="nexcent" />
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
            </div> */}
            <a id='end' href='https://github.com/WeirdLight?tab=repositories' target='_blank' rel='noreferrer'>Click here to view more</a>
        </section>
    );
}