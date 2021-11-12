import axios from "axios";
const SERVER_URL = "http://localhost:4000/";

export const createNewVehicles = async (name, manufactureTime) => {
  try {
    const newVehicles = await axios({
      method: "POST",
      baseURL: SERVER_URL,
      url: "vehicle/create",
      data: {
        name,
        manufactureTime,
      },
    });
    return newVehicles.data;
  } catch (error) {
    throw error;
  }
};
export const getAllVehicles = async () => {
  try {
    const dataVehicles = await axios({
      method: "GET",
      baseURL: SERVER_URL,
      url: "vehicle/",
    });
    return dataVehicles.data;
  } catch (error) {
    throw error;
  }
};

export const updateVehicle = async (id, name, manufactureTime) => {
  try {
    const dataVehicles = await axios({
      method: "PUT",
      baseURL: SERVER_URL,
      url: "/vehicle/update",
      data: {
        id,
        name,
        manufactureTime,
      },
    });
    return dataVehicles.data;
  } catch (error) {
    throw error;
  }
};
export const deleteVehicle = async (id) => {
  try {
    const dataVehicles = await axios({
      method: "DELETE",
      baseURL: SERVER_URL,
      url: `/vehicle/delete/${id}`,
    });
    return dataVehicles.data;
  } catch (error) {
    throw error;
  }
};

export const createNewOrder = async (vehicle, quantity, date) => {
  try {
    const newOrder = await axios({
      method: "POST",
      baseURL: SERVER_URL,
      url: "/order/create",
      data: {
        vehicle,
        quantity,
        date,
      },
    });
    return newOrder.data;
  } catch (error) {
    throw error;
  }
};

export const getReportsDays = async () => {
  try {
    const reportDays = await axios({
      method: "GET",
      baseURL: SERVER_URL,
      url: "/order/report",
    });
    return reportDays.data;
  } catch (error) {
    throw error;
  }
};
