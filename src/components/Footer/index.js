import { Container, Typography, Link } from '@mui/material';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2023 Art@home. Tous droits réservés.
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="inherit" href="/mentions-legales">
            Mentions légales
          </Link>{' '}
          |{' '}
          <Link color="inherit" href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
