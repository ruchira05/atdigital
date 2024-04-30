import React, { Component } from 'react';
import styleFaq from './FaqCard.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import imgPlus from '../images/plus.png';
import imgMin from '../images/min.png';

export class FaqCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // Toggle the clicked state
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    // get heading and body from parent
    const { headText, bodyText } = this.props;
    const { clicked } = this.state;
    return (
      //FAQ component start
      <Container>
  <div onClick={this.handleClick}>
    <Row sm={10} xs={10} className={`d-flex ${styleFaq.drop_down}`}>
      <Col className="d-flex align-items-center">
        <div>
          <div>
            <div
              className={`${styleFaq.head_text} ${
                clicked ? styleFaq.clicked : ''
              }`}
              // change default text cursor
              style={{ cursor: 'pointer' }}
            >
              {headText}
            </div>
          </div>
        </div>
      </Col>
      <Col sm={2} xs={2} className="d-flex align-items-center justify-content-end">
        <div className={`${styleFaq.head_text} ${clicked ? styleFaq.clicked : ''}`} style={{ cursor: 'auto' }}>
          {clicked ? <img src={imgMin} alt="Plus Icon" /> : <img src={imgPlus} alt="Plus Icon" />}
        </div>
      </Col>
      {clicked ? 
      <Row>
        <Col sm={12} xs={12}>
          <div className={`${styleFaq.body_text}`}>
            {bodyText}
          </div>
        </Col>
      </Row>
      : ''}
    </Row>
  </div>
</Container>
//FAQ component close

    );
  }
}

export default FaqCard;
