import React, { useState } from "react";
import { updateVehicle, deleteVehicle } from "../../utils/HTTPrequest";
export function TableReport({ vehiclesList, onReload }) {  

  return (
    <div className="container-table-reports ">
        <h1 className="no-data-table">No existe ningun vehiculo registrado</h1>
      <table className="table-reports">
          <thead>
            <tr>
              <th>Vehiculos</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sabado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>ford</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
              </tr>
          </tbody>
        </table>
    </div>
  );
}
