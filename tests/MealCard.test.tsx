import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MealCard } from "../src/components/MealCard/MealCard";

type Meal = {
  id: number;
  meal: string;
  price: string;
  img: string;
  instructions: string;
  category: string;
};

const mockAdd = jest.fn();
jest.mock('@hooks/useCart', () => ({
  useCart: () => ({
    add: mockAdd
  })
}));

const mockItem: Meal = {
  id: 1,
  meal: "Test Meal",
  price: "10.99",
  img: "test.jpg",
  instructions: "Test instructions long enough to be sliced in component. ".repeat(5),
  category: "main"
};

describe('MealCard Component', () => {  
  beforeEach(() => {
    mockAdd.mockClear();
  });

  test('renders meal information correctly', () => {
    render(<MealCard item={mockItem} />);
    
    expect(screen.getByText(mockItem.meal)).toBeInTheDocument();
    expect(screen.getByText(`$${mockItem.price} USD`)).toBeInTheDocument();
    
    expect(screen.getByText(mockItem.instructions.slice(0, 139))).toBeInTheDocument();
  });

  test('changes amount correctly', () => {
    render(<MealCard item={mockItem} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '3' } });
    expect(input).toHaveValue(3);
  });

  test('calls add to cart with correct parameters', () => {
    render(<MealCard item={mockItem} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.click(screen.getByText('Add to cart'));
    expect(mockAdd).toHaveBeenCalledWith('1', 2);
  });

  test('resets amount after adding to cart', () => {
    render(<MealCard item={mockItem} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(screen.getByText('Add to cart'));
    expect(input).toHaveValue(1);
  });

  test('does not allow amount less than 1', () => {
    render(<MealCard item={mockItem} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '0' } });
    
    expect(input).toHaveAttribute('min', '1');
  });

  test('does not allow amount more than 100', () => {
    render(<MealCard item={mockItem} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '101' } });
    
    expect(input).toHaveAttribute('max', '100');
  });
});