/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// Looking ofr one exhibition among the list of all the exhibitions available
/**
 *  Find the exhibiton that need to be display
 * @param {Array} exhibitions - all exhibitions
 * @param {string} searchedSlug - slug of the selected exhibition
 * @return {Object} - the exhibition corresponding
 */
export function findExhibition(exhibitions, searchedSlug) {
  const exhibitionToDisplay = exhibitions.find((exhibition) => {
    return exhibition.slug === searchedSlug;
  });
  return exhibitionToDisplay;
}
