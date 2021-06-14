import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeSearchQuery, fetchMoviesByName } from '../store/store';

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 50px;
  height: 45px;
  background: #c4c4c4;
`;

const MovieInput = styled.input`
  width: 500px;
  padding: 0 10px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  width: 180px;
  border: none;
  background: linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 0) 100%), #FDFDFD;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E7E7E7 100%), #FDFDFD;
  }
  &:active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E7E7E7 100%), #FDFDFD;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SearchForm = () => {
  const movieInputEl = useRef(null);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const value = movieInputEl.current.value;
    dispatch(changeSearchQuery(value));
    dispatch(fetchMoviesByName(value));
  };
  return (
    <Form {...{ onSubmit }}>
      <MovieInput ref={movieInputEl} placeholder="Movie name" />
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

export default SearchForm;
