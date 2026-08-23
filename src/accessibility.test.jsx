import { render, screen, act } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { useCart } from './context/useCart';
import { useWishlist } from './context/useWishlist';

function CartTestComponent() {
  const { cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  return (
    <div>
      <span data-testid="cart-count">{cartCount}</span>
      <span data-testid="cart-total">{cartTotal}</span>
      <button data-testid="add-item" onClick={() => addToCart({ id: 1, name: 'Test Product', price: 1000, slug: 'test-product' })}>Add</button>
      <button data-testid="remove-item" onClick={() => removeFromCart(1)}>Remove</button>
      <button data-testid="update-qty" onClick={() => updateQuantity(1, 3)}>Update Qty</button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} data-testid="cart-item">{item.name} x {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

function WishlistTestComponent() {
  const { wishlistItems, wishlistCount, isWishlisted, toggleWishlist, removeFromWishlist } = useWishlist();
  return (
    <div>
      <span data-testid="wishlist-count">{wishlistCount}</span>
      <button data-testid="toggle-item" onClick={() => toggleWishlist({ id: 1, name: 'Test Product', price: 1000, slug: 'test-product' })}>Toggle</button>
      <button data-testid="remove-item" onClick={() => removeFromWishlist(1)}>Remove</button>
      <span data-testid="is-wishlisted">{isWishlisted(1) ? 'true' : 'false'}</span>
      <ul>
        {wishlistItems.map(item => (
          <li key={item.id} data-testid="wishlist-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

const renderWithCart = (ui) => render(<CartProvider>{ui}</CartProvider>);
const renderWithWishlist = (ui) => render(<WishlistProvider>{ui}</WishlistProvider>);

async function expectNoViolations(container) {
  const results = await axe(container);
  if (results.violations.length > 0) {
    throw new Error(`Accessibility violations found:\n${results.violations.map(v => `${v.id}: ${v.description} (${v.nodes.length} nodes)`).join('\n')}`);
  }
}

describe('Accessibility - CartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should have no accessibility violations', async () => {
    const { container } = renderWithCart(<CartTestComponent />);
    await expectNoViolations(container);
  });

  test('should have no accessibility violations with items', async () => {
    const { container } = renderWithCart(<CartTestComponent />);
    const addButton = screen.getByTestId('add-item');
    await act(async () => {
      addButton.click();
    });
    await expectNoViolations(container);
  });
});

describe('Accessibility - WishlistContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should have no accessibility violations', async () => {
    const { container } = renderWithWishlist(<WishlistTestComponent />);
    await expectNoViolations(container);
  });

  test('should have no accessibility violations with items', async () => {
    const { container } = renderWithWishlist(<WishlistTestComponent />);
    const toggleButton = screen.getByTestId('toggle-item');
    await act(async () => {
      toggleButton.click();
    });
    await expectNoViolations(container);
  });
});