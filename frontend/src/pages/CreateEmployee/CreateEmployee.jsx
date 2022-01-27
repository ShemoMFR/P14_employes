/* LIBRAIRIES */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

/* REDUX */
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../redux/employee/actionEmployee';

/* CSS */
import './CreateEmployee.css';

const CreateEmployee = () => {

    const dispatch = useDispatch();

    const {register, handleSubmit, formState: { errors }, getValues} = useForm();

    function submit(data) {
        let index = localStorage.getItem('employes') ? localStorage.getItem('employes').length + 1 : 1;
        localStorage.getItem('employes') && console.log(JSON.stringify(localStorage.getItem('employes')).length)
        let copyData = {...data, id: `${index}`};
        
        console.log(copyData)
        dispatch(createEmployee(copyData));
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
                     <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name='firstName' {...register('firstName')}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name='lastName' {...register('lastName')} />

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input id="dateOfBirth" type="text" name='dateOfBirth' {...register('dateOfBirth')}/>

                    <label htmlFor="startDate">Start Date</label>
                    <input id="startDate" type="text" name='startDate' {...register('startDate')}/>

                    <fieldset className="address" >
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" {...register('street')} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" {...register('city')} />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" {...register('state')}>
                            <option>France</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>GERMAN</option>
                            <option>BELGIUM</option>
                        </select>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" {...register('zipCode')} />
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
