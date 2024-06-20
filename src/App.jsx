import Header from './components/Header';
import Banner from './components/Banner';
import DescribingSections from './components/DescribingSections';
import PerProjects from './components/Projects/PetProjects';
import Contacts from './components/Contacts';

export default function App(){

  let aboutMeDescr = <p>Iʼm a third-year Cybersecurity student at the National 
  Aviation University. While I currently donʼt have formal work experience, 
  I have developed several pet-projects and Iʼm actively honing my skills in 
  this field. I can create responsive web pages and Iʼm detail-oriented with 
  strong analytical thinking and teamwork abilities.</p>

  let mySkillsDescr = <p>I have completed <a target='_blank' rel='noreferrer' href="https://certs.prometheus.org.ua/downloads/d96c22dbb97f43c683ebc918c490029a/Certificate.pdf">
  the Prometheus "Front-End Development" course </a>, where I learnt <span>HTML, CSS, and JavaScript</span>. Additionally, I'm 
  independently studing <span>ReactJS</span>.</p>

  return(
    <>
      <Header />
      <Banner />
      <DescribingSections id='about-me' title='About Me' descr={aboutMeDescr}>
        <p>Scroll down <span></span></p>
      </DescribingSections>

      <DescribingSections id='skills' title='My Skills' descr={mySkillsDescr} />

      <PerProjects />
      <Contacts /> 
    </>
  );
}
