import github from '../../images/github.svg';
import firebase from '../../images/firebase.svg';

export default function Project({src, alt, fireLink, gitLink, title, tech, descr}){
    return(
        <div className="project">
            <div className='project-image'>
                <img src={src} alt={alt} />
                <div className='links'>
                    <p>Open on:</p>
                    <ul>
                        <li><a href={fireLink} target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                        <li><a href={gitLink} target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{tech}</p>
                <span>
                    <p>Open on:</p>
                    <ul>
                        <li><a href={fireLink} target='_blank' rel='noreferrer'><img src={firebase} alt="firebase" /></a></li>
                        <li><a href={gitLink} target='_blank' rel='noreferrer'><img src={github} alt="github" /></a></li>
                    </ul>
                </span>
                {descr}
            </div>
        </div>
    );
}