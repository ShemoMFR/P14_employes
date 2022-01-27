/* LIBRAIRIES */
import React from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import DataTable from '../../components/table'

/* REDUX */
import { useSelector } from 'react-redux';

/* CSS */
import './EmployeeList.css';

const EmployeeList = () => {

    const state = useSelector(state => state);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable datas={state} />
            <Link to='/'>Home</Link>
        </div>
    )
};

export default EmployeeList;
