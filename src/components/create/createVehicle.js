import React, { useState } from "react";
import { createNewVehicles } from "../../utils/HTTPrequest";
export function CreateVehicle({ onReload }) {
  const [nameVehicle, setNameVehicle] = useState("");
  const [manufactureTime, setManufactureTime] = useState(1);
  const [error, setError] = useState(false);

  const onSubmit = () => {
    setError(false);
    if (nameVehicle === "" || manufactureTime === "" || manufactureTime <= 0) {
      setError(true);
    } else {
      async function createVehicles() {
        try {
          await createNewVehicles(nameVehicle, manufactureTime);
          setNameVehicle("");
          setManufactureTime(1);
          onReload();
        } catch (error) {
          console.error(error);
        }
      }
      createVehicles();
    }
  };

  return (
    <div className="create ">
      <h3>Crear nuevo vehículo</h3>
      <form method="post">
        <input
          type="text"
          value={nameVehicle}
          placeholder="Marca de vehículo"
          onChange={(event) => setNameVehicle(event.target.value.toLowerCase())}
        />
        <div className="factoryTime">
          <input
            type="number"
            value={manufactureTime}
            onChange={(event) => setManufactureTime(event.target.value)}
          />
          <p>hora/s</p>
        </div>

        {error && (
          <p className="msg-error">
            Todos los campos son abligatorios o deben ser datos validos
          </p>
        )}
        <button className="btn-create-vehicle" type="button" onClick={onSubmit}>
          +
        </button>
      </form>
    </div>
  );
}
