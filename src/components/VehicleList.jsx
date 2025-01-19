import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteVehicle } from '../store/inventorySlice';
import DeleteModal from './DeleteModal';

const VehicleList = () => {
  const { vehicles, filter } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredVehicles =
    filter === 'All' ? vehicles : vehicles.filter((v) => v.type === filter);

  const handleDelete = (id) => {
    dispatch(deleteVehicle(id));
    setIsModalOpen(false);
  };

  return (
    <>
      <h2>Vehicle Inventory</h2>
      {filteredVehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <p>
            {vehicle.year} {vehicle.make} {vehicle.model} - ${vehicle.price} ({vehicle.type})
          </p>
          <button
            onClick={() => {
              setSelectedVehicle(vehicle);
              setIsModalOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleDelete(selectedVehicle?.id)}
        vehicle={selectedVehicle}
      />
    </>
  );
};

export default VehicleList;
