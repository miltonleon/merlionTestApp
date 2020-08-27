import React, { Fragment,useState, useEffect } from "react";
import SalesOne from './SalesOne';
import axios from 'axios';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


export default function Encargado() {
    const [ encargado, setEncargado ] = useState([])
    const consultarApi  = async () => {
        await axios.request({
    url: "http://localhost:8080/api/salesincharge",
    auth:{
      username:'admin',
      password:'admin'
    }
   }).then((response) => {
       setEncargado(response.data)
      })
          }
           useEffect(() =>{
               consultarApi()
           },[])

  return (
   <TableContainer>
  <Table>
     <TableHead>
	<TableRow>
       <TableCell>Id</TableCell>
	     <TableCell>Date</TableCell>
       <TableCell>State</TableCell>
       <TableCell>Product</TableCell>
      
   </TableRow>
       </TableHead>
         <TableBody>
	    {encargado.map(celda=>(
      <SalesOne key={celda.id} props={celda} estado={'SHIPPED'} consultarApi={consultarApi} nombreBoton={'enviar'}/>
      ))}
      </TableBody>
     </Table>
     </TableContainer>

   
   
  );
}