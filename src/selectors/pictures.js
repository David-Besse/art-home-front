/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} exhibitions - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findExhibition(exhibitions, searchedSlug) {
  const exhibition = exhibitions.find((testedExhibition) => {
    return testedExhibition.slug === searchedSlug;
  });
  return exhibition;
}
