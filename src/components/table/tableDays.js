import React, { useState } from "react";
import { updateVehicle, deleteVehicle } from "../../utils/HTTPrequest";
export function TableReport({ vehiclesList, reportList }) {
  // reportList=[]
  console.log(reportList);

  let day = new Date();
  const daysWeek = {
    0: "Sabado",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
  };
  let week = [];
  for (let i = 0; i < 7; i++) {
    week.push(daysWeek[day.getDay()]);
    day.setDate(day.getDate() + 1);
  }
  console.log(reportList.length === 0);
  return (
    <div className="container-table-reports ">
      {reportList.length === 0 ? (
        <h1 className="no-data-table">No existe ningun vehiculo registrado</h1>
      ) : (
        <table className="table-reports">
          <thead>
            <tr>
              <th>Vehiculos</th>
              {week.map((day) => (
                <th>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehiclesList.map((vehicle, index) => {
              return (
                <tr key={vehicle.id}>
                  <td>{vehicle.name}</td>
                  {reportList.map((report) => (
                    <td key={report.id}>{report[vehicle.id]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
