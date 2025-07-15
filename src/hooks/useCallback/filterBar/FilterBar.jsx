import React from 'react';

function FilterBar({ filter, onFilterChange }) {
  return (
    <input
      placeholder="Filter products..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default FilterBar;
