// Looking ofr one exhibition among the list of all the exhibitions available
/**
 *  Find the exhibiton that need to be display
 * @param {Array} exhibitions - all exhibitions
 * @param {string} searchedSlug - slug of the selected exhibition
 * @return {Object} - the exhibition corresponding
 */
export default function findExhibition(exhibitions, searchedSlug) {
  const exhibitionToDisplay = exhibitions.find((exhibition) => exhibition.slug === searchedSlug);
  return exhibitionToDisplay;
}
