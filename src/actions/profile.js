export const TOGGLE_PROFILE_EDITING = 'TOGGLE_PROFILE_EDITING_';
export const TOGGLE_ARTWORK_EDITING = 'TOGGLE_ARTWORK_EDITING';
export const SHOW_SELECTED_EXHIBITION = 'SHOW_SELECTED_EXHIBITION';

export const toggleProfileEditing = () => ({
  type: TOGGLE_PROFILE_EDITING,
});

export const toggleArtworkEditing = (formId) => ({
  type: TOGGLE_ARTWORK_EDITING,
  formId: formId,
});

export const showSelectedExhibition = (exhibitionId) => ({
  type: SHOW_SELECTED_EXHIBITION,
  id: exhibitionId,
});
