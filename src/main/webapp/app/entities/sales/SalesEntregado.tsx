import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';

export default function SalesEntregado({props}) {
    
    return(
      
       <TableRow >
          	<TableCell>{props.id}</TableCell>
		    <TableCell>{props.date}</TableCell>
		    <TableCell>{props.state}</TableCell>
            <TableCell >{props.product_id}</TableCell>
          
       </TableRow>
        
    
    )}
