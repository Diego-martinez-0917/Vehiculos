import React, { useEffect, useState } from "react";
import { CreateVehicle } from "../../components/create/createVehicle";
import { TableVehicles } from "../../components/table/tableVehicles";
import { CreateOrder } from "../../components/create/createOrder";
import { TableReport } from "../../components/table/tableDays";
import { getAllVehicles } from "../../utils/HTTPrequest";
import "./mainView.scss";
import "../../icomoon/style.css";
export function MainPage() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    async function getVehicles() {
      const dataVehicles = await getAllVehicles(); 
      setVehiclesList(dataVehicles)
    }
    getVehicles()
  }, [reload]);

  const onReload = () => setReload(!reload);

  return (
    <div className="main-content">
      <CreateOrder onReload={onReload} vehiclesList={vehiclesList} />
      <div className="container-create card">
        <CreateVehicle onReload={onReload} />
        <TableVehicles onReload={onReload} vehiclesList={vehiclesList}/>
      </div>
      <TableReport/>
    </div>
  );
}
