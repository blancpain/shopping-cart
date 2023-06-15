import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';

// todo: refactor below to check for user clicks, currently just checks text of watch store link

describe('Navbar navigation', () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
  });

  it('click goes to /shop', () => {
    render(<RouterProvider router={router} />);
    const headline = screen.getByText(/watch store/i);
    expect(headline.textContent).toMatch('Watch Store');
  });
});
