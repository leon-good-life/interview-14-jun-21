import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearMovieDetails } from '../store/store';

const BackButtonContainer = styled.div`
  display: flex;
  padding: 50px;
  height: 45px;
  background: #c4c4c4;
`;

const BackButton = styled.button`
  width: 180px;
  border: none;
  background: linear-gradient(180deg, #e7e7e7 0%, rgba(255, 255, 255, 0) 100%),
    #fdfdfd;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e7e7e7 100%),
      #fdfdfd;
  }
  &:active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e7e7e7 100%),
      #fdfdfd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const DT = styled.dt`
  font-weight: bold;
`;

const MovieDetailsContainer = styled.div`
  background-color: #ffffff;
  padding: 50px;
  background: linear-gradient(
      180deg,
      lightgray 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    #fdfdfd;
`;

const MovieDetails = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const keys = Object.keys(movieDetails);

  const onBackClick = () => {
    dispatch(clearMovieDetails());
  };

  return (
    <div>
      <BackButtonContainer>
        <BackButton onClick={onBackClick}>Back</BackButton>
      </BackButtonContainer>
      <MovieDetailsContainer>
        {keys.map((detailKey) => (
          <dl key={detailKey}>
            <DT>{detailKey}</DT>
            <dd>{`${movieDetails[detailKey]}`}</dd>
          </dl>
        ))}
      </MovieDetailsContainer>
    </div>
  );
};

export default MovieDetails;
