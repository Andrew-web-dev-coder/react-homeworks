import { renderHook, act } from '@testing-library/react';
import { useCart } from '../src/hooks/useCart';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/redux/cartSlice';
import React from 'react';


const mockStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});


const wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <Provider store={mockStore}>
    {children}
  </Provider>
);

describe('useCart hook', () => {
  beforeEach(() => {
   
    mockStore.dispatch({ type: 'cart/resetCart' });
   
    sessionStorage.clear();
  });

  test('should return empty cart initially', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.cart).toEqual({});
  });

  test('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    
    act(() => {
      result.current.add('1', 2);
    });

    expect(result.current.cart).toEqual({ '1': 2 });
  });

  test('should increment quantity when adding existing item', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    
    act(() => {
      result.current.add('1', 2);
      result.current.add('1', 3);
    });

    expect(result.current.cart).toEqual({ '1': 5 });
  });

  test('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    
    act(() => {
      result.current.add('1', 2);
      result.current.remove('1');
    });

    expect(result.current.cart).toEqual({});
  });

  test('should handle removing non-existent item', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    
    act(() => {
      result.current.add('1', 2);
      result.current.remove('2');
    });

    expect(result.current.cart).toEqual({ '1': 2 });
  });
});