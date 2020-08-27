import React, { Fragment,useState, useEffect } from "react";
import SalesOne from './SalesOne';
import axios from 'axios';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SalesEntregado from './SalesEntregado'

export default function Entregado() {
    const [ entregado, setEntregado ] = useState([])
    const consultarApi  = async () => {
        await axios.request({
    url: "http://localhost:8080/api/salesdelivered",
    auth:{
      username:'admin',
      password:'admin'
    }
   }).then((response) => {
       setEntregado(response.data)
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
	    {entregado.map(celda=>(
      <SalesEntregado key={celda.id} props={celda}/>
      ))}
      </TableBody>
     </Table>
     </TableContainer>

   
   
  );
}