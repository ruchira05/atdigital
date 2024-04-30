import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styleFooter from './Footer.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import imgLogo from '../images/logo.png'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
        <div>
          {/* start footer */}
            <Row className={`${styleFooter.container_row_style}`}>
          <Col xl={5} lg={7} md={7} sm={12} xs={12} className={`${styleFooter.col_padding}`}>
            <img src={imgLogo} alt="Logo" className={`${styleFooter.footer_logo} img-fluid`}/>
            <div className={`${styleFooter.footer_text}`}>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </div>
          </Col>
          <Col xl={1} lg={5} md={5} sm={12} xs={12} ></Col>
          <Col xl={3} lg={6} md={6} sm={12} xs={12} className={`${styleFooter.footer_list}`}>
          <div className={`${styleFooter.footer_head}`}>
          Our Technologies
          </div>
          <div className={`${styleFooter.footer_text_inter}`}> 
            <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
            </ul>
          </div>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12}  xs={12} className={`${styleFooter.footer_list}`}>
            <div className={`${styleFooter.footer_head}`}>
            Our Services
            </div>
            <div className={`${styleFooter.footer_text_inter}`} >
                <ul>
                    <li>Social media Marketing</li>
                    <li>Web & Mobile App Development</li>
                    <li>Data & Analytics</li>
                </ul>
            </div>
          </Col>
            <div className={`text-center ${styleFooter.footer_line} ${styleFooter.footer_text_inter} border-top border-white pt-2`} style={{maxWidth: '630px', margin: '0 auto'}}/>
            
            <div className={`d-flex align-items-center justify-content-center ${styleFooter.footer_text_inter}`}>
            <div className={styleFooter.botm}>Privacy Policy</div>
            <div className={`${styleFooter.colwidth}`}><span className={`${styleFooter.separator}`}>|</span></div>
            <div className={styleFooter.botm}>Terms & Conditions</div>
            </div>

        </Row>
      {/* close footer */}
        </div>
        
    )
  }
}

export default Footer