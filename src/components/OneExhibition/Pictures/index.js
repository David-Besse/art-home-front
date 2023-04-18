import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { fetchPictures } from '../../../actions/pictures';

const Pictures = () => {
  fetchPictures();
  const { list } = useSelector((state) => state.pictures);
  return (
    <Container>
      {list.map((pictures) => (
        <Row>
          <Col>
            <img src={pictures.picture} alt={pictures.title} />
          </Col>
        </Row>
      ))};
    </Container>
  );
};

export default Pictures;
