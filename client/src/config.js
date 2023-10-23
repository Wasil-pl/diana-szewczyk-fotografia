export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/public/uploads/images/'
    : 'http://localhost:8000/public/uploads/images/';
