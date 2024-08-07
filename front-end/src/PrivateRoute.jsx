import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';


const PrivateRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem("token"); // Change as per your authentication logic
    const navigate = useNavigate();
    useEffect(()=>{
    if(!isAuthenticated){
        navigate('/')
    }
    },[])
    

    // return isAuthenticated ? <Route element={element} /> : <Navigate to="/login" />;
    return element
};

export default PrivateRoute;
