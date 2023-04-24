import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34880349-da5ebd92d345fe025018efba3';

export const getSearchGalleryApi = (request, page) => {
  return axios
    .get(`/?per_page=12&`, {
      params: {
        key: API_KEY,
        q: request,
        imageType: 'photo',
        orientation: 'horizontal',
        page,
      },
    })
    .then(r => r.data);
};


