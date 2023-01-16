import { Container, Row, Col } from "react-bootstrap";
import { images, data } from "../../constants";
import { SkillsCard } from "../../components";
import './About.css';


const About = () => {

    return (
        <section className="app__about" id="about">
          <Container>
            <Row>
              <Col size={12}>
                <h2>About</h2>
                <p>I'm a frontend web developer with a keen interest in React, Javascript, Tailwind and everything frontend, with some dabble in backend. Coding journey sparked from a single passing quote in High school, and has continuously influenced my commitment to the philosophy of life-long learning. Seeing the combination of creativity with techonology has always been mindblowing and drives my excitement and growth.</p>
                <Row className="app__about-skills">
                  {
                    data.skills.map((skill, index) => {
                      return (
                        <SkillsCard
                          key={index}
                          {...skill}
                        />
                      )
                    })
                  }
                </Row>
              </Col>
            </Row>
          </Container>
          <img className="background-image-left" src={images.colorSharp} alt="background"></img>
        </section>
      )
}

export default About;