
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import AddService from './Dashboard/AddServices/AddService';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import About from './Pages/Header/About/About';
import MyOrders from './Dashboard/MyOrders/MyOrders';
import Dashboard from './Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute'
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
   <AuthProvider>
<BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route path="/myOrder" >
            <MyOrders />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/services/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
   </AuthProvider>
      
   

  );
}

export default App;
