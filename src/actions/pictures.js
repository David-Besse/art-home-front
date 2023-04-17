export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SAVE_PICTURES = 'SAVE_PICTURES';

export const fetchPictures = () => ({
  type: FETCH_PICTURES,
});

export const savePictures = ((pictures)) => ({
  type: SAVE_PICTURES,
  pictures: pictures,
});
