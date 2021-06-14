import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchMovieDetailsById } from '../store/store';
import React from 'react';

const PosterImage = styled.img`
  max-width: 250px;
  max-height: 370px;
`;

const MovieTitle = styled.h1`
  margin: 0;
  font-weight: 24px;
`;

const MovieYear = styled.h2`
  margin: 0;
  font-weight: 18px;
`;

const MovieCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  background: linear-gradient(
      180deg,
      lightgray 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    #fdfdfd;
`;

const DetailsButton = styled.button`
  font-size: 18px;
  padding: 5px;
  margin-top: 10px;
  width: 100px;
  color: blue;
  border: none;
  background: linear-gradient(180deg, #e7e7e7 0%, rgba(255, 255, 255, 0) 100%),
    #fdfdfd;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e7e7e7 100%),
      #fdfdfd;
    text-decoration: underline;
  }
  &:active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e7e7e7 100%),
      #fdfdfd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: underline;
  }
`;

const Movie = ({ name, imgUrl, type, year, id }) => {
  const dispatch = useDispatch();
  const onDetailsClick = (event) => {
    dispatch(fetchMovieDetailsById(id));
  };
    return (
      <MovieCard>
        <MovieTitle>{name}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <PosterImage src={imgUrl} alt={`Film poster of ${name}`} />
        <div>type: {type}</div>
        <DetailsButton onClick={onDetailsClick}>Details</DetailsButton>
      </MovieCard>
    );
};

export default Movie;
