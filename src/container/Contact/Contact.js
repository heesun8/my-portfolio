import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import './Contact.css';


const Contact = () => {
  return (
    <section className="app__contact" id="contact">
      <h1>Contact</h1>
      <div className="app__contact-dash" />
      <div className="app__contact-links">
        <a href="https://github.com/heesun8?tab=repositories" target="_blank" rel="noopener noreferrer"><BsGithub color="#fff" fontSize={50} /></a>
        <a href="mailto:u.heesun.b@gmail.com"><FiMail color="#fff" fontSize={50} /></a>
      </div>
    </section>
  );
}

export default Contact;