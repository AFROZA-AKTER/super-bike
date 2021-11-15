import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
const [services , setServices] = useState();
    useEffect(() =>{
        fetch(' http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="tour" >
            <h5 style={{ color: "#1BA370" }} className="text-center mt-5">SALABALE PRODUCTS</h5>
            <h1 style={{ color: "#3B3B3B" }} className="text-center">OUR BEST PRODUCTS</h1>
            <div className="row m-5 ">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;