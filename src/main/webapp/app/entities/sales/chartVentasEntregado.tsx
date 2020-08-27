import React, { PureComponent, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

 interface ServerData {
   cantidad:number
 }

let listaConCantidad:Array<any> = []
export default class ChartVentasEntregado extends PureComponent {
  constructor(props){
    super(props)
    this.state=[]
  }
  consultarApi = async () => {
      await axios.request({
  url: "http://localhost:8080/api/salesdeliveredtoday",
  auth:{
    username:'admin',
    password:'admin'
  }
  
 }).then((response) => {
  listaConCantidad = response.data
  
     this.setState(listaConCantidad)

   
 })
      
        }
    
  componentDidMount (){
    this.consultarApi()
    
  }
  
  render() {
    return (
      <>
 
      <BarChart
        width={200}
        height={300}
        data={listaConCantidad}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="cantidad" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cantidad" fill="#82ca9d" />
      </BarChart>
     </>
    )};
}