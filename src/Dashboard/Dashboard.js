import React, { useState } from 'react';
import AddService from './AddServices/AddService'
import './Dashboard.css';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageServices from './ManageServices/ManageServices';
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    const [control , setControl] = useState("myProfile");

    return (
        <div className="row mt-2">
            <div className="col-md-3">
              <div  className="dashboard-col ">
                  <h5 className="pt-5 text-center">DashBoard</h5>
                  <div className="manage mt-4">
                      <li onClick={() => setControl("myOrder")} className="p-2">My Order</li> <br />
                      <li onClick={() => setControl("review")} className="p-2">Review</li> <br />
                      <li onClick={() => setControl("addServices")} className="p-2">Add Services</li> <br />
                      <li onClick={() => setControl("allServices")} className="p-2">Manage Services</li> <br />
                      <li onClick={() => setControl("manageOrders")} className="p-2">Manage Orders</li><br />
                  </div>
              </div>
            </div>
            <div className="col-md-9 text-center">
              {control === 'myOrder' && <MyOrders></MyOrders> }
              {control === 'addServices' && <AddService></AddService> }
            {control === 'allServices' && <ManageServices></ManageServices> }
              {control === 'manageOrders' && <ManageOrders></ManageOrders> }
              
            </div>
            
        </div>
    );
};

export default Dashboard;