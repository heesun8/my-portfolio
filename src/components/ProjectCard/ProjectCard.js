import { Col } from "react-bootstrap";
import './ProjectCard.css';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="app__proj-imgbx">
        <img src={imgUrl} />
        <div className="app__proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;