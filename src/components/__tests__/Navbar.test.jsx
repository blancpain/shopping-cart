import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';

describe('Navbar navigation', () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
  });

  it('click goes to /shop', async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    await user.click(screen.getByText(/Shop/i));

    // todo - refactor below once Shop comp has been built to be more meaningful
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
