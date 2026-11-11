import React,{useState} from 'react'

import './index.css'

const AddEmployee = () => {

    const [empName,setEmpName]= useState('')
    const [empDepartment,setEmpDept]= useState('')

    const EmpHandler = async (e) => {
        e.preventDefault();
        console.log({empName,empDepartment});
        const empData={empName,empDepartment};
        try{
            const response = await fetch('http://localhost:5000/api/add-emp',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(empData)
            })
            return response.json();
            console.log(`${empName} added successfully`);
        }
        catch(err){
            console.log(`fetch error: ${err}`);
        }

    }

    return (
        <div>
            <form onSubmit ={EmpHandler}>
                <div>
                    <h1 className='head'>Employee Name</h1>
                    <input type='text'  placeholder='Enter Employee Name' onChange = {(e) => setEmpName(e.target.value)}/>
                </div>
                <div>
                    <h1 className='head'>Employee Department</h1>
                    <input type='text' placeholder='Enter Employee Dept' onChange = {(e) => setEmpDept(e.target.value)}/>
                </div>
                <button type='submit' >Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee