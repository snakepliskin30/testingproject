import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

it('render hello component', () => {
  render(<Hello />);
  const myElement = screen.getByText(/hello world/i);
  expect(myElement).toBeInTheDocument();
});
