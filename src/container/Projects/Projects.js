import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../../components";
import { images, data } from "../../constants";
import 'animate.css';
import './Projects.css';

const Projects = () => {

  return (
    <section className="app__project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Row className="app__project-item">
              {
                data.projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={images.colorSharp2}></img>
    </section>
  )
}

export default Projects;