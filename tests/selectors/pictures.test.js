import { findExhibition } from 'src/selectors/findExhibition';

/**
 *  TEST
 */
describe("file findExhibition.js",() => {
  describe("function findExhibition", () => {
    it('should return an exhibition according to the given slug', () => {
      const exhibitions = [{
        id: '1',
        title: 'Renaissance naturelle',
        slug: 'renaissance-naturelle',
        description: 'Cette exposition est une célébration de la nature et de son renouveau. Les œuvres présentées dans cette exposition cherchent à explorer la relation entre l\'homme et la nature et comment cette relation peut être renouvelée pour créer un avenir plus durable. Les visiteurs sont invités à contempler les différentes manières dont l\'artiste explore la relation entre l\'homme et la nature, et comment cette relation peut être renouvelée pour créer un avenir plus durable.',
        picture: 'https://cdn.pixabay.com/photo/2023/02/16/18/36/coffee-7794531_640.jpg',
        firstname: 'Gilles',
        lastname: 'Petit',
        nickname: 'Luminart'
      },
      {
        id: '2',
        title: 'Dans l\'univers d\'Aurélien Baquet',
        slug: 'dans-l-univers-d-aurelien-baquet',
        description: 'L\'exposition présente une collection de photographies, de peintures, de dessins du monde entier qui explorent la beauté et la complexité de la nature. A travers son exposition Aurélien Baquet veut nous transmettre son amour de la nature et le respect qu\'il a pour elle. Voyager à travers cette exposition immersive',
        picture: 'https://cdn.pixabay.com/photo/2022/02/08/13/41/jellyfish-7001410_640.jpg',
        firstname: 'Gilles',
        lastname: 'Petit',
        nickname: 'Luminart'
      }];

      const givenSlug = exhibitions[1].slug;

      const result = findExhibition(exhibitions, givenSlug);

      expect(result).toEqual(exhibitions[1]);
    })
  })
});
