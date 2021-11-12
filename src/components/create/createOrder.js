import "flatpickr/dist/themes/material_green.css";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import { createNewOrder } from "../../utils/HTTPrequest";
import Select from "react-select";

export function CreateOrder({ vehiclesList, onReload }) {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(null);
  const [error, seterror] = useState(false);

  const onSubmit = () => {
    seterror(false);
    console.log(quantity <= 1)
    if (selectedVehicle === "" || quantity === "" || quantity < 1  || date === "") {
      seterror(true);
    }
     else {
      async function createOrder() {
        try {
          await createNewOrder(selectedVehicle.value, parseInt(quantity), date);
          setSelectedVehicle("");
          setQuantity("");
          setDate("");
          onReload();
        } catch (error) {
          console.error(error);
        }
      }
      createOrder();
    }
  };
  const options = vehiclesList.map((vehicle) => {
    return { value: vehicle.id, label: vehicle.name };
  });

  return (
    <div className="create-order card">
      <h2>Crear nueva solicitud de fabricacíon</h2>
      <form method="post">
        <Select
          className="select-vehicle"
          name="form-field-name"
          value={selectedVehicle}
          onChange={setSelectedVehicle}
          options={options}
          placeholder="Marca de vehículo"
        />

        <input
          type="number"
          value={quantity}
          placeholder="Cantidad"
          min="1"
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        <Flatpickr
          value={date}
          onChange={(date, dateStr) => setDate(dateStr)}
          placeholder="Seleccioné una fecha"
          options={{ minDate: new Date(), dateFormat: "Y-m-d" }}
        />

        {error && (
          <p className="msg-error">Todos los campos deben ser llenados</p>
        )}
        <button className="bt-create-submit" type="button" onClick={onSubmit}>
          Crear orden
        </button>
      </form>
    </div>
  );
}
