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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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