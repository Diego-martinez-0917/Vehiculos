import React, { useState } from "react";
import { updateVehicle, deleteVehicle } from "../../utils/HTTPrequest";
export function TableVehicles({ vehiclesList, onReload }) {
  function VehicleRender({ vehicle, onReload }) {
    const [edit, SetEdit] = useState(false);
    const vehicleId = vehicle.id;
    const [newName, SetNewName] = useState(vehicle.name);
    const [newManufactureTime, SetNewManufactureTime] = useState(
      vehicle.manufactureTime
    );

    const onClickEdit = () => SetEdit(!edit);

    const onClickDelete = (id) => {
      // axios delete
      async function deleteVehicleById() {
        try {
          await deleteVehicle(id);
          onReload();
        } catch (error) {
          console.error(error);
        }
      }
      deleteVehicleById();
    };

    const onSubmit = (id) => {
      //axios update by id
      async function updateVehicleById() {
        try {
          await updateVehicle(id, newName, newManufactureTime);
          onClickEdit();
          onReload();
        } catch (error) {
          console.error(error);
        }
      }
      updateVehicleById();
    };

    return (
      <tr>
        {edit ? (
          <td>
            <input
              className="input-new-name"
              type="text"
              value={newName}
              onChange={(event) => SetNewName(event.target.value.toLowerCase())}
            />
          </td>
        ) : (
          <td>{newName}</td>
        )}
        {edit ? (
          <td>
            <div className="container-manofacture-time">
              <input
                className="input-new-manufacture-time"
                type="number"
                value={newManufactureTime}
                onChange={(event) =>
                  SetNewManufactureTime(event.target.value.toLowerCase())
                }
              />
              <p>hora/s</p>
            </div>
          </td>
        ) : (
          <td>{newManufactureTime} hora/s </td>
        )}
        <td>
          {edit ? (
            <button type="button" onClick={() => onSubmit(vehicleId)}>
              <span className="icon-floppy-disk"></span>
            </button>
          ) : (
            <button type="button" onClick={onClickEdit}>
              <span className="icon-pencil"></span>
            </button>
          )}
        </td>
        <td>
          <button
            type="button"
            className="btn-accent"
            onClick={() => onClickDelete(vehicleId)}
          >
            <span className="icon-bin2"></span>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="container-table ">
      <h3>Lista de vehículos</h3>
      {vehiclesList.length === 0 ? (
        <h4>No existe ningun vehiculo registrado</h4>
      ) : (
        <table className="table-vehicles">
          <thead>
            <tr>
              <th>Vehículo</th>
              <th>
                tiempo de <br /> fabricación
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!vehiclesList && <h1>Loading</h1>}

            {vehiclesList &&
              vehiclesList.map((vehicle) => (
                <VehicleRender
                  key={vehicle.id}
                  vehicle={vehicle}
                  onReload={onReload}
                />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
