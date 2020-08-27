import React, { Fragment,useState, useEffect } from "react";
import SalesOne from './SalesOne';
import axios from 'axios';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


export default function Entregado() {
    const [enviado, setEnviado ] = useState([])
    const consultarApi  = async () => {
        await axios.request({
    url: "http://localhost:8080/api/salesshipped",
    auth:{
      username:'admin',
      password:'admin'
    }
   }).then((response) => {
       setEnviado(response.data)
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
	    {enviado.map(celda=>(
      <SalesOne key={celda.id} props={celda} estado={'IN_CHARGE'} consultarApi={consultarApi} nombreBoton={'enviar'} />
      ))}
      </TableBody>
     </Table>
     </TableContainer>

   
   
  );
}