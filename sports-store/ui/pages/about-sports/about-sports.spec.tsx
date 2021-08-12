import React from 'react';
import { render } from '@testing-library/react';
import { BasicAboutSports } from './about-sports.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAboutSports />);
  const rendered = getByText('About our Sports Store');
  expect(rendered).toBeTruthy();
});
