import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeListAdmin from './components/EmployeeListAdmin';
import EmployeeForm from './components/EmployeeForm';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set true if token exists, otherwise false
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear token from local storage on logout
  };

  // Private Route Component
  // const PrivateRoute = ({ element }) => {
  //   return isLoggedIn ? element : <Navigate to="/" />;
  // };

  // Login Route Component
  const LoginRoute = ({ element }) => {
    return element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Login onLogin={handleLogin} />} />} />
        <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} />} />
        <Route path="/employee-list-admin" element={<PrivateRoute element={<EmployeeListAdmin />} />} />
        <Route path="/employee-add" element={<PrivateRoute element={<EmployeeForm />} />} />
        <Route path="/employee-dashboard" element={<PrivateRoute element={<EmployeeDashboard />} />} />
        <Route path="/employee-list" element={<PrivateRoute element={<EmployeeList />} />} />
        <Route path="/employee-form/:id" element={<PrivateRoute element={<EmployeeForm />} />} />
      </Routes>
    </Router>
  );
};

export default App;
