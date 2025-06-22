import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Contactus from './pages/Contactus.jsx';
import Feedback from './pages/Feedback.jsx';
import Books from './pages/BooksPage'
import Confirm from './pages/OrderConfirmationPage'
import Error from './pages/Failed';
import Placed from './pages/PlacedOrder'
import Order from './pages/Orders'
import Cart from './pages/Cart'
import Library from './pages/Library'
import Seat from './pages/SeatBook'
import Seatdetails from './pages/SeatDetails'
import Seatconfirm from './pages/PlacedSeat'
import Loader from './pages/Loader'

import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path: "/",element: <Main/>},
        {path: "/about",element: <About/>},
        {path: "/contactus",element: <Contactus/>},
        {path: "/feedback" ,element: <Feedback/>},
        {path: "/books",element: <Books/>},
        {path:"/books/:bookId",element:<Confirm/>},
        {path:"/error",element: <Error/>},
        {path:"/placed",element: <Placed/>},
        {path:'/order',element: <Order/>},
        {path:"/cart",element: <Cart/>},
        {path:"/library",element: <Library/>},
        {path:'/seat/:id',element:<Seat/>},
        {path:'/seatdetails',element:<Seatdetails/>},
        {path:'/seatconfirm',element: <Seatconfirm/>},
        {path:'loader',element:<Loader/>},
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App