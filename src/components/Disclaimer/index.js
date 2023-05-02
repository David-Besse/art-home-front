import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

const Disclaimer = () => (
  <>
    <Header />
    <Page>
      <div className="p-2 text-center m-5">
        <p>
          Objet des CGU
          Les présentes CGU ont pour objet de définir les conditions d'utilisation de votre site internet [Art@home] par les utilisateurs.
        </p>

        <p>Acceptation des CGU
          L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si un utilisateur n'accepte pas les CGU, il doit s'abstenir d'utiliser le site.
        </p>

        <p>Accès au site
          L'accès au site est ouvert à tous les utilisateurs disposant d'une connexion internet et d'un navigateur web. L'accès peut être suspendu ou interrompu à tout moment pour des raisons techniques ou pour des raisons de maintenance.
        </p>

        <p>Contenu du site
          Le site permet aux artistes de publier des images de leurs œuvres. Les images sont libres de droits et peuvent être téléchargées et utilisées pour un usage personnel ou éducatif. Cependant, il est strictement interdit d'utiliser ces images à des fins commerciales sans l'autorisation écrite de l'artiste.
        </p>

        <p>Responsabilité
          L'administrateur du site ne peut être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation du site. L'utilisateur assume l'entière responsabilité de l'utilisation du site et de son contenu.
        </p>

        <p>Propriété intellectuelle
          Le site et son contenu sont la propriété de [Ecole O'clock SAS, situé au 10 RUE DE PENTHIEVRE 75008 PARIS ]. Toute reproduction, distribution ou utilisation du site ou de son contenu sans l'autorisation écrite de [Ecole O'clock] est strictement interdite.
        </p>

        <p>Données personnelles
          Le site collecte des données personnelles sur les utilisateurs, notamment lors de l'inscription. Les données collectées sont utilisées pour la gestion du site et pour communiquer avec les utilisateurs. Les données personnelles ne sont pas transmises à des tiers sans le consentement préalable de l'utilisateur.
        </p>

        <p>Modifications des CGU
          Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs seront informés des modifications par une notification sur le site. L'utilisation continue du site après la notification des modifications implique l'acceptation des nouvelles CGU.
        </p>

        <p>Loi applicable et juridiction compétente
          Les présentes CGU sont régies par le droit français. Tout litige relatif à l'utilisation du site sera soumis à la juridiction compétente.
        </p>
      </div>
    </Page>
    <Footer />
  </>
);

export default Disclaimer;
