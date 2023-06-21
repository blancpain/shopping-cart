import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { CartProvider } from '../../ShoppingCartContext';
import routesConfig from '../../routes/RoutesConfig';

describe('Shopping cart item', () => {
  const router = createMemoryRouter(createRoutesFromElements(routesConfig()), {
    initialEntries: ['/shop/1'],
  });

  it('adding items shows correct quantity in the shopping cart', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Add to cart/i));
    await user.click(screen.getByTestId('shopping-cart-btn'));

    expect(screen.getByTestId('shopping-cart-item-quantity').value).toBe(String(1));
  });

  it('adds item when add btn clicked', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Add to cart/i));
    await user.click(screen.getByTestId('shopping-cart-btn'));
    await user.click(screen.getByTestId('shopping-cart-add-btn'));
    await user.click(screen.getByTestId('shopping-cart-add-btn'));

    expect(screen.getByTestId('shopping-cart-item-quantity').value).toBe(String(3));
  });

  it('removes item when del btn clicked', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Add to cart/i));
    await user.click(screen.getByTestId('shopping-cart-btn'));
    await user.click(screen.getByTestId('shopping-cart-add-btn'));
    await user.click(screen.getByTestId('shopping-cart-del-btn'));

    expect(screen.getByTestId('shopping-cart-item-quantity').value).toBe(String(1));
  });

  it('correctly shows no shopping cart items when quantity becomes 0', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Add to cart/i));
    await user.click(screen.getByTestId('shopping-cart-btn'));
    await user.click(screen.getByTestId('shopping-cart-del-btn'));

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
