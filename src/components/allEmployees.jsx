import React,{useState,useEffect} from 'react'

const ListComponent = props => {
    const {listDetails}=props
    const {empName,empDepartment}=listDetails
    return(
        <h1>{empName} is working under {empDepartment}</h1>
    )
}

const AllEmployees = () => {
    const [empRecords,setEmpRecords]= useState([])

    const recordHandler = async () => {
        try{
            const apiResponse = await fetch("http://localhost:5000/api/all-emp")
            const apiData = await apiResponse.json()
            console.log('All Employees:',apiData);
            setEmpRecords(apiData);

        }
        catch(err){
            console.log(`fetch error: ${err}`);
        }
    }

    useEffect(() => {
        recordHandler();
    },[]);

    return(
        <div>
            {empRecords.map(i => <ListComponent key={i._id} listDetails={i}/>)}
        </div>
    )
}

export default AllEmployees