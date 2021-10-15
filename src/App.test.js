import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders text on the start screen', () => {
  render(<App />);
  expect(screen.getByText('Выберите категорию')).toBeInTheDocument();
});