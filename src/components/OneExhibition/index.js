import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from "react-bootstrap";
import './style.scss';

const OneExhibition = () => {
  // const { list } = useSelector ((state) => state.pictures);
  <Container>
    <Row>
      <Col><img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </Col>
      <Col> 
      <img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80s"></img>
      </Col>
      <Col><img src="https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"></img> </Col>
    </Row>
    <Row>
      <Col><img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </Col>
      <Col> 
      <img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80s"></img>
      </Col>
      <Col><img src="https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"></img> </Col>
    </Row>
  </Container>
};

export default OneExhibition; 

