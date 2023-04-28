import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

const Disclaimer = () => (
  <>
    <Header />
    <Page>
      <div className="p-2 text-center m-5">
        <p>
          Identification du propriétaire du site :
        </p>
        <p>
          Propriété intellectuelle : Tous les contenus présents sur le site de
          littérature (textes, images, vidéos, logos, etc.) sont la propriété
          exclusive de WriterTalent. ou de ses partenaires. Toute reproduction,
          modification, distribution ou exploitation de ces contenus sans
          autorisation écrite préalable est strictement interdite.
        </p>
        <p>
          Données personnelles : Ce site collecte des données personnelles des
          utilisateurs (nom, prénom, adresse e-mail, etc.) dans le cadre de
          l’utilisation du site et des services proposés. Ces données sont
          traitées conformément à la réglementation en vigueur et aux dispositions
          de la politique de confidentialité accessible sur le site.
        </p>
        <p>
          Cookies: Ce site utilise des cookies pour améliorer l’expérience
          utilisateur et proposer des services adaptés aux préférences des
          utilisateurs. Les utilisateurs peuvent gérer les cookies en fonction de
          leurs préférences via les paramètres de leur navigateur.
        </p>
        <p>
          Limitation de responsabilité : Ce site met tout en œuvre pour garantir
          l’exactitude et la mise à jour des informations diffusées sur le site.
          Cependant, les éditeurs de WriterTalent ne peuvent être tenus
          responsables des erreurs ou omissions dans ces informations. De même,
          les éditeurs de WriterTalent ne peuvent être tenus responsables des
          dommages directs ou indirects résultant de l’utilisation du site ou des
          informations qu’il contient.
        </p>
        <p>
          Droit applicable et juridiction compétente : Les présentes mentions
          légales sont soumises au droit français. Tout litige relatif à
          l’utilisation du site sera de la compétence exclusive des tribunaux
          français.
        </p>
      </div>
    </Page>
    <Footer />
  </>
);

export default Disclaimer;
