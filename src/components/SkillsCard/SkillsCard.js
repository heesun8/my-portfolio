import './SkillsCard.css';
import { Col } from "react-bootstrap";


const SkillsCard = ({ title, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>

        <div className="app__skillsCard">
        {/* <div className="app__skillsCard-wrapper"> */}
        <img src={imgUrl} alt="skills" />
            <h3>{title}</h3>
        {/* </div> */}
        </div>
        </Col>

    );
}

export default SkillsCard; 