import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';

export default function SalesOne({props,estado, consultarApi, nombreBoton}) {
    
 const entregar=async ()=>{
  await axios.request({
   method: "PUT",
   url: "http://localhost:8080/api/sales",
    auth:{
      username:'admin',
      password:'admin',
    },

    data: {
        id:props.id,
        date: props.date,
        product:{id:props.product_id},
        state:estado
   }
 }).then(() => consultarApi())
      
}
    return(
      
       <TableRow >
          	<TableCell>{props.id}</TableCell>
		    <TableCell>{props.date}</TableCell>
		    <TableCell>{props.state}</TableCell>
            <TableCell >{props.product_id}</TableCell>
           <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" 
            onClick={entregar}>{nombreBoton}</button>
       </TableRow>
        
    
    )}
