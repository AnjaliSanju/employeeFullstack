import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
  const token = localStorage.getItem('token')
  

  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!token){
  //     navigate("/")
  //   }
  //     },[])
  const handleLogout = () => {
    // Clear any authentication tokens or session data
    // For example, if using localStorage:
    localStorage.removeItem('token');
    navigate('../');

    console.log("object")
    // Redirect the user to the login page
  };

  const handleAddEmployees = () => {
    navigate('/employee-add');
  };

  const handleEmployeeList = () => {
    navigate('/employee-list-admin'); // Navigate to the employee list page
  };
  return (
    <>
    <AppBar position="static" style={{ backgroundColor:"#020a9cf7" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit" onClick={handleAddEmployees}>Employee Form</Button>
          <Button color="inherit" onClick={handleEmployeeList}>Employees</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default AdminNavbar;
