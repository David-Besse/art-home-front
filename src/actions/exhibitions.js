export const FETCH_EXHIBITIONS = 'FETCH_EXHIBITIONS';
export const SAVE_EXHIBITIONS = 'SAVE_EXHIBITIONS';
export const FETCH_USER_ARTWORKS = 'FETCH_USER_ARTWORKS';
export const SAVE_USER_ARTWORKS = 'SAVE_USER_ARTWORKS';
export const UPDATE_USER_ARTWORK = 'UPDATE_USER_ARTWORK';
export const SUBMIT_NEW_ARTWORK = 'SUBMIT_NEW_ARTWORK';
export const SUBMIT_NEW_EXHIBITION = 'SUBMIT_NEW_EXHIBITION';
export const SAVE_USER_EXHIBITIONS = 'SAVE_USER_EXHIBITIONS';
export const DELETE_USER_ARTWORK = 'DELETE_USER_ARTWORK';
export const WIPE_DATA = 'WIPE_DATA';

export const fetchExhibitions = () => ({
  type: FETCH_EXHIBITIONS,
});

export const saveExhibitions = (exhibitions) => ({
  type: SAVE_EXHIBITIONS,
  payload: exhibitions,
});

export const fetchUserArtworks = (exhibitionId) => ({
  type: FETCH_USER_ARTWORKS,
  payload: exhibitionId,
});

export const saveUserArtworks = (data) => ({
  type: SAVE_USER_ARTWORKS,
  payload: data,
});

export const updateUserArtwork = (artworkId, data) => ({
  type: UPDATE_USER_ARTWORK,
  artworkId: artworkId,
  data: data,
});

export const submitNewArtwork = (data) => ({
  type: SUBMIT_NEW_ARTWORK,
  payload: data,
});

export const submitNewExhibition = (data) => ({
  type: SUBMIT_NEW_EXHIBITION,
  payload: data,
});

export const saveUserExhibitions = (exhibitions) => ({
  type: SAVE_USER_EXHIBITIONS,
  payload: exhibitions,
});

export const deleteUserArtwork = (artworkId) => ({
  type: DELETE_USER_ARTWORK,
  id: artworkId,
});

export const wipeData = () => ({
  type: WIPE_DATA,
});
