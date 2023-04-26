export const FETCH_EXHIBITIONS = 'FETCH_EXHIBITIONS';
export const SAVE_EXHIBITIONS = 'SAVE_EXHIBITIONS';
export const FETCH_USER_ARTWORKS = 'FETCH_USER_ARTWORKS';
export const SAVE_USER_ARTWORKS = 'SAVE_USER_ARTWORKS';
export const UPDATE_USER_ARTWORK = 'UPDATE_USER_ARTWORK';
export const SUBMIT_NEW_ARTWORK = 'SUBMIT_NEW_ARTWORK';
export const DELETE_USER_ARTWORK = 'DELETE_USER_ARTWORK';

export const fetchExhibitions = () => ({
  type: FETCH_EXHIBITIONS,
});

export const saveExhibitions = (exhibitions) => ({
  type: SAVE_EXHIBITIONS,
  exhibitions: exhibitions,
});

export const fetchUserArtworks = (exhibitionId) => ({
  type: FETCH_USER_ARTWORKS,
  payload: exhibitionId,
});

export const saveUserArtworks = (artworks) => ({
  type: SAVE_USER_ARTWORKS,
  artworks: artworks,
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

export const deleteUserArtwork = (artworkId) => ({
  type: DELETE_USER_ARTWORK,
  id: artworkId,
});
