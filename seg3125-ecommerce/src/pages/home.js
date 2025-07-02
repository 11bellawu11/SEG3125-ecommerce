import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './home.css';
import { Link } from 'react-router-dom';
import { games } from './GameList';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return(
    <div className="body">
      <Row>
        <Col>
          <Container>
            <h3>
              Action games
            </h3>
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src={"./images/placeholder.jpg"} />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container>
            Adventure games
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container>
            RPG games
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container>
            Simulation games
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container>
            Horror games
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
export default Home;