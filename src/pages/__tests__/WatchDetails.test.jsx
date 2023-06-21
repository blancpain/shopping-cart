import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { CartProvider } from '../../ShoppingCartContext';
import routesConfig from '../../routes/RoutesConfig';

describe('WatchDetails page functionality', () => {
  const router = createMemoryRouter(createRoutesFromElements(routesConfig()), {
    initialEntries: ['/shop/1'],
  });

  it('adding items to bag correctly shows item quantity on Navbar', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Add to cart/i));
    await user.click(screen.getByText(/Add to cart/i));

    expect(screen.getByTestId('navbar-cart-quantity').textContent).toBe(String(2));
  });
});
