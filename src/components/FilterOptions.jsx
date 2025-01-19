import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/inventorySlice';

const FilterOptions = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Filter Vehicles</h2>
      <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="All">All</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Truck">Truck</option>
      </select>
    </div>
  );
};

export default FilterOptions;
