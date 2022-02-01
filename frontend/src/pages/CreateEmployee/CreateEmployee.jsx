/* LIBRAIRIES */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

/* REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee } from '../../redux/employee/actionEmployee';

/* COMPONENTS */
import Modal from '../../components/Modal/Modal';

/* CSS */
import './CreateEmployee.css';

const CreateEmployee = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const {register, handleSubmit, formState: { errors }, getValues} = useForm();

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    function submit(data) {
        let copyData = {...data, id: `${state.length + 1}`};
        dispatch(createEmployee(copyData));
        setOpen(true)
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                 <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" onSubmit={handleSubmit(submit)} style={{marginBottom: '200px'}}>
                     <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name='firstName' {...register('firstName')}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name='lastName' {...register('lastName')} />

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input id="dateOfBirth" type="date" name='dateOfBirth' {...register('dateOfBirth')}/>

                    <label htmlFor="startDate">Start Date</label>
                    <input id="startDate" type="date" name='startDate' {...register('startDate')}/>

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
            </div >

            <Modal 
                title="Employee Created" 
                body="Employee has been created" 
                open={open}
                setOpen={setOpen} 
            />
        </>
    )
};

export default CreateEmployee;
