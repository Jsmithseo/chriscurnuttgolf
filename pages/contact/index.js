import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Contact() {
  return (
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <center>
            {/* <img
              src="/logo.png" // Replace with your image path
              alt="Image"
              className="img-fluid logo"
            /> */}

            <h1 className="display-3">Contact</h1>
          </center>
        </div>
      </div>
      <div style={MainStyle}>
        <Container>
          <Row>
            <Col md="12">
              <br></br>
              <br></br>
              {/* <HubSpotContactForm id="hubsptContactForm" /> */}
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
