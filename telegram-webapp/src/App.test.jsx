import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Добро пожаловать!/i);
  expect(linkElement).toBeInTheDocument();
});
