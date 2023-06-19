import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './styles.scss';

// disclaimer page
const Disclaimer = () => (
  <>
    <Header />
    <Page>
      <section className="disclaimer-page">
        <p className="alerte">
          Ce site a été développé dans un but éducatif, les mentions légales
          suivantes sont factices et n'ont aucunes valeurs réelles.
        </p>
        <br />
        <h1>Mentions légales</h1>
        <br />
        <h2>Éditeur du site :</h2>
        <p>
          Nom de l'entreprise : <strong>Art@home</strong>
          <br />
          Forme juridique : SARL<br />
          Adresse : 123 boulevard des oeuvres<br />
          75000 Paris France
          <br />
          Numéro de téléphone : +33 01 23 45 67 89
          <br />
          Adresse e-mail : contact-art_home@gmail.com
        </p>

        <h2>Directeur de publication :</h2>
        <p>
          Nom du directeur de publication : <strong>Art@home</strong> direction
        </p>

        <h2>Hébergeur du site :</h2>
        <p>
          Nom de l'entreprise : PlanetHoster
          <br />
          Adresse : 4416 Louis-B. -Mayer, Laval, Québec, Canada H7P 0G1
          <br />
          Numéro de téléphone : 01 76 60 41 43
        </p>

        <h2>Propriété intellectuelle :</h2>
        <p>
          Le site et son contenu sont la propriété exclusive de <strong>Art@home</strong> ou de ses partenaires. Toute reproduction,
          représentation, modification, distribution ou exploitation non
          autorisée, partielle ou totale, du contenu du site est strictement
          interdite, sauf accord préalable écrit de <strong>Art@home</strong>.
        </p>

        <h2>Données personnelles :</h2>
        <p>
          Le site peut collecter des données personnelles lors de l'utilisation
          du site, notamment lors de l'inscription ou du téléchargement d'œuvres
          d'art. Ces données sont utilisées uniquement dans le cadre de la
          gestion du site et pour communiquer avec les utilisateurs. Elles ne
          seront pas transmises à des tiers sans le consentement préalable de
          l'utilisateur.
        </p>

        <h2>Cookies :</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l'expérience de
          navigation des utilisateurs. Les utilisateurs peuvent paramétrer leur
          navigateur pour refuser les cookies, mais cela peut limiter certaines
          fonctionnalités du site.
        </p>

        <h2>Responsabilité :</h2>
        <p>
          L'éditeur du site décline toute responsabilité quant aux erreurs ou
          omissions dans le contenu du site. Les utilisateurs utilisent le site
          à leurs propres risques. L'éditeur du site ne peut être tenu
          responsable de tout dommage direct ou indirect résultant de
          l'utilisation du site.
        </p>

        <h2>Loi applicable et juridiction compétente :</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. Tout
          litige relatif à l'utilisation du site sera soumis à la juridiction
          compétente du tribunal de Paris, en France.
        </p>

        <p>
          Ceci est un exemple général de mentions légales. Il est recommandé de
          consulter un professionnel du droit pour s'assurer de la conformité
          légale des mentions légales avec la législation applicable dans votre
          pays.
        </p>
      </section>
    </Page>
    <Footer />
  </>
);

export default Disclaimer;
