export const TOGGLE_PROFILE_EDITING = 'TOGGLE_PROFILE_EDITING_';
export const TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION = 'TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION';

export const toggleProfileEditing = () => ({
  type: TOGGLE_PROFILE_EDITING,
});

export const toggleAlertAfterEmailModification = () => ({
  type: TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION,
});