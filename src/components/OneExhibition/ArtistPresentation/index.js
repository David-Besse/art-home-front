import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

const ArtistPresentation = () => {
  const { slug } = useParams();
  const { artist } = useSelector((state) => findExhibition(state.pictures.list, slug));

  return (
    <Card className="card-artist">
      <Card.Img className="avatar" variant="top" src={artist.avatar} alt={artist.slug} />
      <Card.Body className="body-artist">
        <Card.Title className="nickname">{artist.nickname}</Card.Title>
        <Card.Text className="realname">{artist.firstname} {artist.lastname}</Card.Text>
        <Card.Text className="presentation">{artist.presentation}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtistPresentation;
