import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('App', () => {
  it('renders headline', () => {
    render(<Home />);
    const headline = screen.getByText(/Hello there!/i);
    expect(headline).toBeInTheDocument();
  });
});
