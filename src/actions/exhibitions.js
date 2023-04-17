export const FETCH_EXHIBITIONS = 'FETCH_EXHIBITIONS';
export const SAVE_EXHIBITIONS = 'SAVE_EXHIBITIONS';

export const fetchExhibitions = () => ({
  type: FETCH_EXHIBITIONS,
});

export const saveExhibitions = (exhibitions) => ({
  type: SAVE_EXHIBITIONS,
  exhibitions: exhibitions,
});
