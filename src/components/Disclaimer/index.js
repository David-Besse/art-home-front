import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './styles.scss';

/* CGU */

const Disclaimer = () => (
  <>
    <Header />
    <Page>
      <section className="disclaimer-page">

        <h3>Objet des CGU</h3>
        <p>
          Les présentes CGU ont pour objet de définir les conditions d'utilisation de votre site internet <strong>Art@home</strong> par les utilisateurs.
        </p>

        <h3>Acceptation des CGU</h3>
        <p>
          L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si un utilisateur n'accepte pas les CGU, il doit s'abstenir d'utiliser le site.
        </p>

        <h3>Accès au site</h3>
        <p>
          L'accès au site est ouvert à tous les utilisateurs disposant d'une connexion internet et d'un navigateur web. L'accès peut être suspendu ou interrompu à tout moment pour des raisons techniques ou pour des raisons de maintenance.
        </p>

        <h3>Contenu du site</h3>
        <p>
          Le site permet aux artistes de publier des images de leurs œuvres. Les images sont libres de droits et peuvent être téléchargées et utilisées pour un usage personnel ou éducatif. Cependant, il est strictement interdit d'utiliser ces images à des fins commerciales sans l'autorisation écrite de l'artiste.
        </p>

        <h3>Responsabilité</h3>
        <p>
          L'administrateur du site ne peut être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation du site. L'utilisateur assume l'entière responsabilité de l'utilisation du site et de son contenu.
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          Le site et son contenu sont la propriété de <strong>Ecole O'clock SAS</strong>. Toute reproduction, distribution ou utilisation du site ou de son contenu sans l'autorisation écrite de <strong>Ecole O'clock</strong> est strictement interdite.
        </p>

        <h3>Données personnelles</h3>
        <p>
          Le site collecte des données personnelles sur les utilisateurs, notamment lors de l'inscription. Les données collectées sont utilisées pour la gestion du site et pour communiquer avec les utilisateurs. Les données personnelles ne sont pas transmises à des tiers sans le consentement préalable de l'utilisateur.
        </p>

        <h3>Modifications des CGU</h3>
        <p>
          Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs seront informés des modifications par une notification sur le site. L'utilisation continue du site après la notification des modifications implique l'acceptation des nouvelles CGU.
        </p>

        <h3>Loi applicable et juridiction compétente</h3>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige relatif à l'utilisation du site sera soumis à la juridiction compétente.
        </p>
      </section>
    </Page>
    <Footer />
  </>
);

export default Disclaimer;
