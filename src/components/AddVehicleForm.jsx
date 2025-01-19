import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVehicle } from '../store/inventorySlice';

const AddVehicleForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addVehicle({
        make,
        model,
        year: parseInt(year),
        type,
        price: parseFloat(price),
      })
    );
    setMake('');
    setModel('');
    setYear('');
    setType('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Vehicle</h2>
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type (e.g., Sedan, SUV, Truck)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default AddVehicleForm;
