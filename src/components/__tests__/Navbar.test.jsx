import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import routesConfig from '../../routes/RoutesConfig';

describe('Navbar navigation', () => {
  const router = createMemoryRouter(createRoutesFromElements(routesConfig()), {
    initialEntries: ['/'],
  });

  it('click goes to /contact', async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    await user.click(screen.getByText(/Contact/i));

    // todo - refactor below once Shop comp has been built to be more meaningful
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
