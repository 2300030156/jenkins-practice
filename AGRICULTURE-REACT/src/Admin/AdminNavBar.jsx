import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AddFarmer from './AddFarmer';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import ViewAllProducts from './ViewAllProducts';
import ViewCustomers from './ViewCustomers';
import ViewFarmers from './ViewFarmers';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isAdminLoggedIn", "false");
    navigate("/adminlogin");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="container-fluid">
          <span className="navbar-brand">Welcome Admin</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="adminNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/adminhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addfarmer">Add Farmer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewfarmers">View Farmers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewcustomers">View Customers</Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="productDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </span>
                <ul className="dropdown-menu" aria-labelledby="productDropdown">
                  <li>
                    <Link className="dropdown-item" to="/viewallproducts">View All</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addfarmer" element={<AddFarmer />} />
          <Route path="/viewfarmers" element={<ViewFarmers />} />
          <Route path="/viewcustomers" element={<ViewCustomers />} />
          <Route path="/viewallproducts" element={<ViewAllProducts />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </div>
  );
}
