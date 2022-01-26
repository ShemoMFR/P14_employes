/* LIBRAIRIES */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

/* REDUX */
import {useSelector, useDispatch} from 'react-redux';
import { createEmployee } from '../../redux/employee/actionEmployee';

/* CSS */
import './CreateEmployee.css';

const CreateEmployee = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const {register, handleSubmit, formState: { errors }, getValues} = useForm();

    function submit(data) {
        
        dispatch(createEmployee(data));
        console.log(state);
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                 <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" onSubmit={handleSubmit(submit)}>
                     <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name='first-name' {...register('first-name')}/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name='last-name' {...register('last-name')} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" name='date-of-birth' {...register('date-of-birth')}/>

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" name='start-date' {...register('start-date')}/>

                    <fieldset className="address" >
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" {...register('state')}>
                            <option>France</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>GERMAN</option>
                            <option>BELGIUM</option>
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" {...register('department')}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select> 
                    <button >Save</button> 
                </form>

            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )
};

export default CreateEmployee;
