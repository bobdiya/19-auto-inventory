import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteVehicle } from '../store/inventorySlice';

const VehicleList = () => {
  const { vehicles, filter } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const filteredVehicles =
    filter === 'All' ? vehicles : vehicles.filter((v) => v.type === filter);

  return (
    <div>
      <h2>Vehicle Inventory</h2>
      {filteredVehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <p>
            {vehicle.year} {vehicle.make} {vehicle.model} - ${vehicle.price} ({vehicle.type})
          </p>
          <button onClick={() => dispatch(deleteVehicle(vehicle.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
