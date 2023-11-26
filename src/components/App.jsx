import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieCast } from './MovieCast/MovieaCast';
import { MovieReviews } from './MovieReviews/MovieReviews';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
