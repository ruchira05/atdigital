import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCmp from './components/NavbarCmp';
import heroImg from './images/heroimage.png'
import { Col, Container, Row } from 'react-bootstrap';
import BtnYellow from './components/BtnYellow';
import imgPc from "./images/imagePc.png"
import imgSearch from "./images/imageSearch.png"
import FaqCard from './components/FaqCard';
import Footer from './components/Footer';

function App() {
  return (
    <Container fluid>
      {/* Navigation Bar */}
      <Row className="sticky-top">
          <NavbarCmp/>
      </Row>
      {/* Navigation Bar Close*/}

      {/* Hero Section */}
      <Row>
        <figure>
          <img  src={heroImg} className='img-fluid' alt='hearoImage'></img>
          <figcaption className='fig-caption box'>
            <div className="hero-font">
            We crush your competitors, goals, and sales records - without the B.S.
            </div>
            <BtnYellow btnText="Get free consultation"></BtnYellow>
          </figcaption>
        </figure>
      </Row>
      {/* Hero section close */}

      {/* General Body */}

      {/* First detail section */}
      <Row className='body-row' md={2} sm={1} xs={1}>
        <Col className='d-flex justify-content-centerd-flex justify-content-center align-items-center'>
        <figure>
          <img src={imgPc} className='img-fluid' alt='pcimage'></img>
        </figure> 
        </Col>

        <Col>
          <div id='text-container'>
          <Row>
            <div className='text-header'>
            Web & Mobile App Development
            </div>
          </Row>
          <Row>
            <div className='text-body'>
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </div>
          </Row>
          <Row>
            <BtnYellow btnText="Learn More"></BtnYellow>
          </Row>
          </div>
        </Col>
      </Row>
      {/* First detail section close */}

      {/* Second detail section */}
      <Row className='body-row' md={2} sm={1} xs={1}>

      <Col className='d-flex justify-content-centerd-flex justify-content-center align-items-center'>
        <figure>
          <img src={imgSearch} className='img-fluid' alt='Search'></img>
        </figure> 
        </Col>

      <Col className="order-md-first">
          <div id='text-container'>
          <Row>
            <div className='text-header'>
            Digital Strategy Consulting
            </div>
          </Row>
          <Row>
            <div className='text-body'>
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.            </div>
          </Row>
          <Row>
            <BtnYellow btnText="Learn More"></BtnYellow>
          </Row>
          </div>
        </Col>
      </Row>
      {/* Second detail section close */}

      {/* FQA section */}
      <Row className='text-header'>
        <center className='mt-5'>
        Frequently asked questions
        </center>
      </Row>
      {/* Dropdown Component */}
      <Row>

        <FaqCard 
        bodyText ="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.        "
        headText="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?">
        </FaqCard> 

        <FaqCard 
        bodyText ="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.        "
        headText="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?">
        </FaqCard> 

        <FaqCard 
        bodyText ="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.        "
        headText="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?">
        </FaqCard>

      </Row>
    {/* FQA section close */}

    {/* Footer start */}
      <Footer></Footer>
    {/* Footer close */}
    
    </Container>
  );
}

export default App;
