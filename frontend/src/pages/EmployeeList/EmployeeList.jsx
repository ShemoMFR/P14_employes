/* LIBRAIRIES */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './EmployeeList.css';

const EmployeeList = () => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to='/'>Home</Link>
        </div>
    )
};

export default EmployeeList;
