import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetails } from './moviesApi';

export const fetchMoviesByName = createAsyncThunk(
  'movies/fetchByName',
  async (movieName, thunkAPI) => {
    const response = await fetchMovies(movieName);
    return response.data;
  }
);


export const fetchMovieDetailsById = createAsyncThunk(
  'movies/fetchById',
  async (movieId, thunkAPI) => {
    const response = await fetchMovieDetails(movieId);
    return response.data;
  }
);

const mockMovies = [{"Title":"Home Alone","Year":"1990","imdbID":"tt0099785","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Home Alone 2: Lost in New York","Year":"1992","imdbID":"tt0104431","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Home Alone 3","Year":"1997","imdbID":"tt0119303","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTJhYjVhOWMtYTUyOS00NWM0LThjNzYtZWYxOTkwN2FhODg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"A Girl Walks Home Alone at Night","Year":"2014","imdbID":"tt2326554","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMzNjMyMjU2M15BMl5BanBnXkFtZTgwMzA3NjQ0MzE@._V1_SX300.jpg"},{"Title":"Home Alone 4: Taking Back the House","Year":"2002","imdbID":"tt0329200","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzNjM3OTEwNjNeQTJeQWpwZ15BbWU3MDk1ODIwMDE@._V1_SX300.jpg"},{"Title":"Home Alone: The Holiday Heist","Year":"2012","imdbID":"tt2308733","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2M2ZTg2MDctMmM0Zi00NmZiLTgzMzUtYmYxNjEyYTFhOWMxXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},{"Title":"Home Alone 4","Year":"2002","imdbID":"tt13677540","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGFlNjMyOTYtNjRkZi00MTljLTgyN2EtNDQ5MjFlMmZkNDJiXkEyXkFqcGdeQXVyMzc5MTE4NzY@._V1_SX300.jpg"},{"Title":"Google Assistant: Home Alone Again","Year":"2018","imdbID":"tt9493634","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWFkZGYxZjUtMmNlMi00NzYxLWI0M2EtYmY2ZDA5YmMyMDE3XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"},{"Title":"Home Alone 2: Lost in New York","Year":"1992","imdbID":"tt0295319","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BNjc1ODFhNjgtZTBmOS00ZmExLWE4OWUtNGE3YzM0MjA3MmFjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"},{"Title":"Home Alone 4: Taking Back the House","Year":"2002","imdbID":"tt12481246","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzg3ZDY0NTQtZDYyMC00NWJhLWE5MTUtNjZmNjZlNWY3N2JiXkEyXkFqcGdeQXVyNDMzOTI3ODc@._V1_SX300.jpg"}];

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { searchQuery: '', movies: [], movieDetails: null },
  reducers: {
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearMovieDetails(state, action) {
      state.movieDetails = null;
    }
  },
  extraReducers: {
    [fetchMoviesByName.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchMovieDetailsById.fulfilled]: (state, action) => {
      console.log('action payload', action.payload);
      state.movieDetails = action.payload;
    },
  },
});

const store = configureStore({ reducer: moviesSlice.reducer });

export const { changeSearchQuery, clearMovieDetails } = moviesSlice.actions;

export default store;
