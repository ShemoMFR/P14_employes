/* LIBRAIRIES */
import React from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import DataTable from '../../components/table'

/* CSS */
import './EmployeeList.css';

const EmployeeList = () => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable />
            <Link to='/'>Home</Link>
        </div>
    )
};

export default EmployeeList;
