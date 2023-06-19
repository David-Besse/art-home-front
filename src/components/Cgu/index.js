import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './styles.scss';

// CGU page
const CguPage = () => (
  <>
    <Header />
    <Page>
      <section className="cgu-page">
        <p className="vim"> Toutes les images issues de ce site proviennent de {' '}
          <a
            href="https://pixabay.com/fr/service/terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pixabay.com
          </a>.
          <br /> Elles sont utilisées dans un cadre purement éducatif et ne seront ni utilisées à des fins commerciales, ni conservées.
        </p>
        <br />
        <h1>Conditions Générales d'Utilisation (CGU)</h1>
        <br />
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent
          l'utilisation du site <strong>Art@home</strong> (ci-après dénommé "le Site") qui
          permet aux utilisateurs d'accéder à une collection d'images d'œuvres
          d'art déposées par des artistes.
        </p>

        <h2>2. Acceptation des CGU</h2>
        <p>
          L'utilisation du Site implique l'acceptation pleine et entière des
          présentes CGU. Si un utilisateur n'accepte pas les CGU, il doit
          s'abstenir d'utiliser le Site.
        </p>

        <h2>3. Accès au Site</h2>
        <p>
          L'accès au Site est ouvert à tous les utilisateurs disposant d'une
          connexion Internet et d'un navigateur web compatible. L'accès peut
          être suspendu ou interrompu à tout moment pour des raisons techniques,
          de maintenance ou pour améliorer le fonctionnement du Site.
        </p>

        <h2>4. Contenu du Site</h2>
        <h3>4.1 Droits d'utilisation</h3>
        <p>
          Les images d'œuvres d'art disponibles sur le Site sont librement
          téléchargeables et utilisables à des fins personnelles, éducatives. Il est
          strictement interdit d'utiliser ces images à des fins commerciales .
          Toute utilisation commerciale des images nécessite une autorisation
          préalable de l'artiste ou du détenteur des droits d'auteur.
        </p>
        <h3>4.2 Responsabilité de l'utilisateur</h3>
        <p>
          L'utilisateur est seul responsable de l'utilisation qu'il fait des
          images téléchargées à partir du Site. L'utilisateur s'engage à
          respecter les droits d'auteur et les mentions de provenance
          lorsqu'il utilise les images.
        </p>

        <h2>5. Propriété intellectuelle</h2>
        <p>
          Le Site et son contenu, y compris les images d'œuvres d'art, sont
          protégés par le droit d'auteur et sont la propriété exclusive des
          artistes ou de leurs détenteurs de droits respectifs. Toute
          reproduction, représentation, modification, distribution ou
          exploitation non autorisée du contenu du Site est strictement
          interdite, sauf accord préalable écrit des artistes ou des détenteurs
          de droits.
        </p>

        <h2>6. Collecte de données personnelles</h2>
        <p>
          Le Site peut collecter des données personnelles sur les utilisateurs,
          notamment lors de l'inscription ou lors de la soumission d'œuvres
          d'art. Les données collectées sont utilisées dans le cadre de la
          gestion du Site et pour communiquer avec les utilisateurs. Les données
          personnelles ne sont pas transmises à des tiers sans le consentement
          préalable de l'utilisateur, sauf dans les cas prévus par la loi.
        </p>

        <h2>7. Modifications des CGU</h2>
        <p>
          Les présentes CGU peuvent être modifiées à tout moment. Les
          utilisateurs seront informés des modifications par une notification
          sur le Site. L'utilisation continue du Site après la notification des
          modifications implique l'acceptation des nouvelles CGU.
        </p>

        <h2>8. Limitation de responsabilité</h2>
        <p>
          L'administrateur du Site met tout en œuvre pour assurer la
          disponibilité et l'exactitude des informations fournies. Cependant, il
          ne peut être tenu responsable des erreurs, omissions, virus ou
          indisponibilités du Site. L'utilisateur utilise le Site à ses propres
          risques et assume l'entière responsabilité de son utilisation.
        </p>

        <h2>9. Loi applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige
          relatif à l'utilisation du Site sera soumis à la juridiction
          compétente.
        </p>
      </section>
    </Page>
    <Footer />
  </>
);

export default CguPage;
