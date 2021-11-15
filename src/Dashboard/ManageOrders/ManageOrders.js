import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState();
    const [control, setControl] = useState(false);
    const [status, setStatus] = useState();


    const handleStatus = e => {
        setStatus(e.target.value)
    }
    console.log(status)

    /* const { register, handleSubmit } = useForm();
    const handleUpdate = id => {
        fetch(` https://glacial-tundra-74344.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({status})
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('updated successfully')
                }
            })
        console.log(id);
    } */
    
    


    useEffect(() => {
        fetch(' http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        fetch(` http://localhost:5000/cancelOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you sure?  please clicked ok if you want to delete');
                    setControl(!control);
                }

            })
        console.log(id);
    }


    const handleUpdate = id =>{
        fetch(` http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({status})
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('updated successfully')
                }
            })
        console.log(id);
    } 

    return (
        <div className=" table-responsive">
            <h2 style={{ color: "#1BA370" }} className="text-center mt-2">Manage All Orders</h2>
            {/* <h3 style={{ color: "#071C55" }}>All Orders {orders.length}</h3> */}
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Title </th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((service, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{service.title}</td>
                            <td className="w-25">{service.img}</td>
                            <td>
                            <input onChange={handleStatus}  className="border-0 rounded" type="text" defaultValue={service.status} />
                                
                               {/*  <form onSubmit={handleSubmit(handleUpdate)}>
                                    <select onChange={handleStatus} {...register("Title")}>
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                    </select> 
                                    
                                </form>  */}
                            </td>
                            <button onClick={() => handleDelete(service._id)} className="btn bg-danger p-2 my-2 mx-2 text-white">DELETE</button>
                            <button onClick={() => handleUpdate(service._id)} className="btn bg-success p-2 my-2 mx-2 text-white">UPDATE</button>
                            
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;