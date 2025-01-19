import './App.css'
import React from 'react';
import VehicleList from './components/VehicleList';
import AddVehicleForm from './components/AddVehicleForm';
import FilterOptions from './components/FilterOptions';

const App = () => {
  return (
    <div>
      <h1>Automobile Inventory Management</h1>
      <AddVehicleForm />
      <FilterOptions />
      <VehicleList />
    </div>
  );
};

export default App;
