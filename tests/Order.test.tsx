import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Order from '../src/pages/Order/Order';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/redux/cartSlice';


jest.mock('@hooks/useCart', () => ({
  useCart: () => ({
    cart: { '1': 2 },
    remove: jest.fn()
  })
}));

describe('Order Component', () => {
  beforeAll(() => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          id: '1',
          name: 'Test Meal',
          meal: 'Test Meal',
          img: 'test.jpg',
          price: 10
        }),
      })
    );
  });

  const mockStore = configureStore({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: {
        cart: { '1': 2 }
      }
    }
  });

  beforeEach(() => {
    jest.clearAllMocks();
   
    window.localStorage.clear();
  });

  test('should display loading state initially', () => {
    render(
      <Provider store={mockStore}>
        <Order />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should display cart items after loading', async () => {
    render(
      <Provider store={mockStore}>
        <Order />
      </Provider>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Test Meal')).toBeInTheDocument();
      expect(screen.getByText('$20.00 USD')).toBeInTheDocument();
    });
  });
});