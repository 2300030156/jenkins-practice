import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewFarmers() {
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState("");

  const displayFarmers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewFarmers`);
      setFarmers(response.data);
    } catch (err) {
      setError("Failed to fetch farmers data ... " + err.message);
    }
  };

  useEffect(() => {
    displayFarmers();
  }, []);

  const deleteFarmer = async (fid) => {
    try {
      const response = await axios.delete(`${config.url}/admin/deleteFarmer?fid=${fid}`);
      toast.success(response.data);
      displayFarmers();
    } catch (err) {
      console.log(err);
      setError("Unexpected Error Occurred... " + err.message);
      toast.error("Deletion failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
        <u>View All Farmers</u>
      </h3>

      <ToastContainer position="top-center" autoClose={4000} />

      {error ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          {error}
        </p>
      ) : farmers.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          No Farmers Data Found
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Username</th>
              <th>Mobile No</th>
              <th>Location</th>
              <th>Farm Name</th>
              <th>Crop Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer) => (
              <tr key={farmer.id}>
                <td>{farmer.id}</td>
                <td>{farmer.fullName}</td>
                <td>{farmer.gender}</td>
                <td>{farmer.dateOfBirth}</td>
                <td>{farmer.email}</td>
                <td>{farmer.username}</td>
                <td>{farmer.mobileNo}</td>
                <td>{farmer.location}</td>
                <td>{farmer.farmName}</td>
                <td>{farmer.cropType}</td>
                <td>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteFarmer(farmer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
