import {Link, useNavigate} from 'react-router-dom'
import {useState, forwardRef, useImperativeHandle} from 'react'
import axios from 'axios';
import { BiCar,BiLocationPlus,BiCart,BiBody,BiCalculator,BiListOl} from "react-icons/bi";


import "./sidebar.css"

const Sidebar = () => {



  return (
   <html>
     <head>

     </head>
     <body><div class="area"></div><nav class="main-menu">
               <ul>
                   <li>
                       <a href="/admin/dashboard">
                           <i class="fa fa-home fa-2x"></i>
                           <span class="nav-text">
                               Dashboard
                           </span>
                       </a>

                   </li>
                   <li class="has-subnav">
                       <a href="/admin/products">
                           <BiCar class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                               Products
                           </span>
                       </a>

                   </li>
                   <li class="has-subnav">
                       <a href="/admin/salesperson">
                       <BiBody class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                               Salespersons
                           </span>
                       </a>

                   </li>
                   <li class="has-subnav">
                       <a href="/admin/orders">
                       <BiCart class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                               Orders
                           </span>
                       </a>

                   </li>
                   <li>
                       <a href="/admin/locationquota">
                       <BiLocationPlus class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                               Location-Quota
                           </span>
                       </a>
                   </li>
                   <li>
                       <a href="/admin/comissionrules">
                       <BiListOl class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                              Comission rules
                           </span>
                       </a>
                   </li>
                   <li>
                      <a href="/admin/payments">
                      <BiCalculator class="fa fa-list fa-2x"/>
                           <span class="nav-text">
                               Payments
                           </span>
                       </a>
                   </li>
                   
               </ul>

               <ul class="logout">
                   <li>
                      <a href="#">
                            <i class="fa fa-power-off fa-2x"></i>
                           <span class="nav-text">
                               Logout
                           </span>
                       </a>
                   </li>
               </ul>
           </nav>
     </body>
       </html>
  )
};

export default Sidebar
