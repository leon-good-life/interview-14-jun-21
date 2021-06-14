const API_URL = `${window.location.protocol}//www.omdbapi.com/?apikey=1498909b`;

export const fetchMovies = (movieName) =>
  new Promise((resolve, reject) => {
    const url = `${API_URL}&s=${encodeURIComponent(movieName)}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          const { status, statusText } = response;
          reject({ error: { status, statusText } });
        }
        return response.json();
      })
      .then((responseJson) => {
        resolve({ data: responseJson?.Search });
      });
  });

export const fetchMovieDetails = (movieId) =>
  new Promise((resolve, reject) => {
    const url = `${API_URL}&i=${encodeURIComponent(movieId)}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          const { status, statusText } = response;
          reject({ error: { status, statusText } });
        }
        return response.json();
      })
      .then((responseJson) => {
        resolve({data: responseJson});
      });
  });
