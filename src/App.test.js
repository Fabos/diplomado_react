import { render, screen } from '@testing-library/react';
import App from './App';

test('verifies link text in App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Visita nuestro repositorio en GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
