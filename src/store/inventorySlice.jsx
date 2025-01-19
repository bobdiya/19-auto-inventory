import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2022, type: 'Sedan', price: 20000 },
    { id: 2, make: 'Ford', model: 'F-150', year: 2023, type: 'Truck', price: 35000 },
    { id: 3, make: 'Honda', model: 'CR-V', year: 2021, type: 'SUV', price: 25000 },
  ],
  filter: 'All', // Default filter
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addVehicle: (state, action) => {
      state.vehicles.push({ id: Date.now(), ...action.payload });
    },
    updateVehicle: (state, action) => {
      const { id, updatedDetails } = action.payload;
      const vehicle = state.vehicles.find((v) => v.id === id);
      if (vehicle) {
        Object.assign(vehicle, updatedDetails);
      }
    },
    deleteVehicle: (state, action) => {
      state.vehicles = state.vehicles.filter((v) => v.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addVehicle, updateVehicle, deleteVehicle, setFilter } = inventorySlice.actions;
export default inventorySlice.reducer;
