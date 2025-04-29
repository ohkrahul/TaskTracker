import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  test('renders the search input field', () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const searchInput = screen.getByPlaceholderText('Search tasks by title...');
    expect(searchInput).toBeInTheDocument();
  });
  
  test('calls onSearch when input changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search tasks by title...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });
  
  test('clears input when clear button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search tasks by title...');
    
    // First set a value
    fireEvent.change(searchInput, { target: { value: 'test' } });
    
    // Verify the clear button appears
    const clearButton = screen.getByRole('button');
    expect(clearButton).toBeInTheDocument();
    
    // Click the clear button
    fireEvent.click(clearButton);
    
    // Verify the input is cleared and onSearch is called with empty string
    expect(searchInput.value).toBe('');
    expect(mockOnSearch).toHaveBeenCalledWith('');
  });
  
  test('does not show clear button when input is empty', () => {
    render(<SearchBar onSearch={() => {}} />);
    
    // No clear button should be visible initially
    const clearButton = screen.queryByRole('button');
    expect(clearButton).not.toBeInTheDocument();
    
    // Add text and check if button appears
    const searchInput = screen.getByPlaceholderText('Search tasks by title...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    
    const clearButtonAfterInput = screen.queryByRole('button');
    expect(clearButtonAfterInput).toBeInTheDocument();
    
    // Clear text and check if button disappears
    fireEvent.change(searchInput, { target: { value: '' } });
    
    const clearButtonAfterClear = screen.queryByRole('button');
    expect(clearButtonAfterClear).not.toBeInTheDocument();
  });
});