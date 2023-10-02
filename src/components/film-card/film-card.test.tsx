import React from 'react';
import { render } from '@testing-library/react';
import FilmCard from './film-card.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('FilmCard', () => {
  const movie = {
    id: 1,
    title: 'Title',
    poster_path: 'poster.jpg',
  };

  it('renders the FilmCard component with movie details', () => {
    const { getByRole, getByText, getByAltText } = render(
      <BrowserRouter>
        <FilmCard movie={movie} />
      </BrowserRouter>
    );

    const link = getByRole("link");
    const image = getByAltText(movie.title);

    expect(link).toHaveAttribute("href", `/detail/${movie.id}`);
    expect(image).toHaveAttribute("src", `${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`);

    const title = getByText(movie.title);
    expect(title).toBeInTheDocument();
  });

});