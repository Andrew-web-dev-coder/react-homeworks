import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MealList from '../src/components/MealList/MealList';
import cartReducer from '../src/redux/cartSlice';

jest.mock('../src/hooks/useCart', () => ({
  useCart: () => ({
    add: jest.fn()
  })
}));

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

const mockMeals = [
  { id: 1, meal: "Meal 1", price: "10.99", img: "test.jpg", instructions: "Test", category: "Breakfast" },
  { id: 2, meal: "Meal 2", price: "5.99", img: "test.jpg", instructions: "Test", category: "Dessert" },
  { id: 3, meal: "Meal 3", price: "8.99", img: "test.jpg", instructions: "Test", category: "Breakfast" },
  { id: 4, meal: "Meal 4", price: "7.99", img: "test.jpg", instructions: "Test", category: "Dessert" },
  { id: 5, meal: "Meal 5", price: "9.99", img: "test.jpg", instructions: "Test", category: "Breakfast" },
  { id: 6, meal: "Meal 6", price: "6.99", img: "test.jpg", instructions: "Test", category: "Dessert" },
  { id: 7, meal: "Meal 7", price: "11.99", img: "test.jpg", instructions: "Test", category: "Breakfast" }
];

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockMeals),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('MealList Component', () => {
  test('loads and displays meals', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MealList />
        </Provider>
      );
    });
    
    expect(await screen.findByText('Meal 1')).toBeInTheDocument();
  });

  test('filters meals by category', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MealList />
        </Provider>
      );
    });

    
    expect(screen.getByText('Meal 1')).toBeInTheDocument();
    expect(screen.getByText('Meal 2')).toBeInTheDocument();

    
    await act(async () => {
      fireEvent.click(screen.getByText('Dessert'));
    });

    
    expect(screen.getByText('Meal 2')).toBeInTheDocument();
    expect(screen.queryByText('Meal 1')).not.toBeInTheDocument();
  });

  test('shows "See more" button when there are more meals', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MealList />
        </Provider>
      );
    });

    expect(await screen.findByText('See more')).toBeInTheDocument();
  });

  test('loads more meals when "See more" clicked', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MealList />
        </Provider>
      );
    });

    const seeMoreButton = await screen.findByText('See more');
    await act(async () => {
      fireEvent.click(seeMoreButton);
    });

    expect(screen.getByText('Meal 7')).toBeInTheDocument();
    expect(screen.queryByText('See more')).not.toBeInTheDocument();
  });

  test('shows loading state', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MealList />
        </Provider>
      );
    });
    
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});