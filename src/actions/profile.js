export const TOGGLE_PROFILE_EDITING = 'TOGGLE_PROFILE_EDITING_';
export const TOGGLE_ARTWORK_EDITING = 'TOGGLE_ARTWORK_EDITING';
export const TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION = 'TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION';
export const SHOW_SELECTED_EXHIBITION = 'SHOW_SELECTED_EXHIBITION';

export const toggleProfileEditing = () => ({
  type: TOGGLE_PROFILE_EDITING,
});

export const toggleArtworkEditing = () => ({
  type: TOGGLE_ARTWORK_EDITING,
});

export const toggleAlertAfterEmailModification = () => ({
  type: TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION,
});

export const showSelectedExhibition = (exhibitionId) => ({
  type: SHOW_SELECTED_EXHIBITION,
  id: exhibitionId,
});
