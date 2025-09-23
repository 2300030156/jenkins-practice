import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddFarmer() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    username: '',
    password: '',
    mobileNo: '',
    location: '',
    farmName: '',
    cropType: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCase = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.toUpperCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/addFarmer`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          fullName: '',
          gender: '',
          dateOfBirth: '',
          email: '',
          username: '',
          password: '',
          mobileNo: '',
          location: '',
          farmName: '',
          cropType: ''
        });
      }
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center text-decoration-underline mb-3">Add Farmer</h3>
      {message ? (
        <p className="text-center text-success fw-bold">{message}</p>
      ) : (
        <p className="text-center text-danger fw-bold">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" id="fullName" className="form-control" value={formData.fullName} onChange={handleChange} onKeyUp={handleCase} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select id="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" id="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" id="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile No</label>
          <input type="text" id="mobileNo" className="form-control" value={formData.mobileNo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" id="location" className="form-control" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Farm Name</label>
          <input type="text" id="farmName" className="form-control" value={formData.farmName} onChange={handleChange} onKeyUp={handleCase} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Crop Type</label>
          <input type="text" id="cropType" className="form-control" value={formData.cropType} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Add Farmer</button>
      </form>
    </div>
  );
}
