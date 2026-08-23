import { render, screen, fireEvent } from '@testing-library/react';
import { WishlistProvider } from '../context/WishlistContext';
import { useWishlist } from '../context/useWishlist';

function TestComponent() {
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

const renderWithWishlist = (ui) => render(<WishlistProvider>{ui}</WishlistProvider>);

describe('WishlistContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('initializes with empty wishlist', () => {
    renderWithWishlist(<TestComponent />);
    expect(screen.getByTestId('wishlist-count').textContent).toBe('0');
    expect(screen.getByTestId('is-wishlisted').textContent).toBe('false');
  });

  test('adds item to wishlist', () => {
    renderWithWishlist(<TestComponent />);
    fireEvent.click(screen.getByTestId('toggle-item'));
    expect(screen.getByTestId('wishlist-count').textContent).toBe('1');
    expect(screen.getByTestId('is-wishlisted').textContent).toBe('true');
  });

  test('removes item from wishlist when toggled again', () => {
    renderWithWishlist(<TestComponent />);
    fireEvent.click(screen.getByTestId('toggle-item'));
    fireEvent.click(screen.getByTestId('toggle-item'));
    expect(screen.getByTestId('wishlist-count').textContent).toBe('0');
    expect(screen.getByTestId('is-wishlisted').textContent).toBe('false');
  });

  test('removes item via removeFromWishlist', () => {
    renderWithWishlist(<TestComponent />);
    fireEvent.click(screen.getByTestId('toggle-item'));
    fireEvent.click(screen.getByTestId('remove-item'));
    expect(screen.getByTestId('wishlist-count').textContent).toBe('0');
    expect(screen.getByTestId('is-wishlisted').textContent).toBe('false');
  });

  test('persists wishlist to localStorage', () => {
    renderWithWishlist(<TestComponent />);
    fireEvent.click(screen.getByTestId('toggle-item'));
    const saved = localStorage.getItem('sixYardsWishlist');
    expect(saved).toBeTruthy();
    const parsed = JSON.parse(saved);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].name).toBe('Test Product');
  });

  test('loads wishlist from localStorage on init', () => {
    localStorage.setItem('sixYardsWishlist', JSON.stringify([
      { id: 2, name: 'Saved Product', price: 2000, slug: 'saved-product' }
    ]));
    renderWithWishlist(<TestComponent />);
    expect(screen.getByTestId('wishlist-count').textContent).toBe('1');
    expect(screen.getByTestId('is-wishlisted').textContent).toBe('false'); // different product id
  });

  test('handles corrupted localStorage gracefully', () => {
    localStorage.setItem('sixYardsWishlist', 'invalid json');
    renderWithWishlist(<TestComponent />);
    expect(screen.getByTestId('wishlist-count').textContent).toBe('0');
  });
});