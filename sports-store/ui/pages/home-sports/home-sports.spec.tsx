import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomeSports } from './home-sports.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicHomeSports />);
  const rendered = getAllByText('Your Number 1 Online Shop');
  expect(rendered).toBeTruthy();
});
