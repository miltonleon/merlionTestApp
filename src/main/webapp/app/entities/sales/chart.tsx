import React, { PureComponent, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

 interface ServerData {
   name: string
   price: number
   total:number
 }
 let lista:Array <ServerData>=[]

export default class Example extends PureComponent {

  consultarApi = async () => {
      await axios.request({
  url: "http://localhost:8080/api/salesproductsincome",
  auth:{
    username:'admin',
    password:'admin'
  }
 
 }).then((response) => {
  lista=response.data
     this.setState(lista)
  
   
 })
      
        }
    
  componentDidMount (){
    this.consultarApi()
    
  }

  render() {
    return (
      <>
     
      <BarChart
        width={500}
        height={300}
        data={lista}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        <Bar dataKey="total" fill="#82ca9d" />
      </BarChart>
     </>
    )};
}
