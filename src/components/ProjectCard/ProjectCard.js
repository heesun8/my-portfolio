import { Col } from "react-bootstrap";
import { MdOutlineOpenInNew } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import './ProjectCard.css';

const ProjectCard = ({ title, description, imgUrl, site, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="app__proj-imgbg">
        <img src={imgUrl} alt="projectImage" />
        <div className="app__proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="app__proj-links">
            <a href={site} target="_blank" rel="noopener noreferrer">
            <MdOutlineOpenInNew color="#fff" fontSize={25}/>Live Site</a>
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
            <BsGithub color="#fff" fontSize={25}/>Github</a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;