import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import axios from 'axios';


function App() {

  const url = new URL('http://localhost:8000')

  interface Json{
author:string,
date:string,
description:string,
image:string,
profile_pic:string,
title:string,
__v:number,
_id:string
  }

  const [arr,setarr]=useState<any>(null)
  const [loading,setloading]=useState<boolean>(true);
  const [obj,setobj]=useState(<Spinner/>)


  useEffect(()=>{
    setloading(true);
    axios.get(`${url}api/notes/all-notes`).then((resp)=>{
      console.log(1)
      setarr(resp.data[0]);
      setloading(false);
      
    }).catch(error => {
      console.log(error);
      setloading(false);
    });

    
  },[])

  if(loading){

    return <Spinner/>
  }



  return (
    <div className="App">
     <Navbar font-style={'Playfair Display,serif'} />
     <br /><br /><br /><br /><br /><br />
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo sunt nostrum incidunt dicta recusandae unde quo iure rem harum facilis temporibus, vitae magni aut officia. Et eius consequuntur ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea, cumque magnam provident nam ratione ex suscipit blanditiis at itaque commodi saepe rem accusamus quas assumenda est! Incidunt, quae laboriosam. </p>
     <br />
    
     {arr?
     <>
     <p>{arr.author+"\n"+arr.title+"\n"+arr.description+"\n"}</p>
     <h2>The above text was fetched from mongoDB</h2>
     </>:null}
     <br /><br /><br /><br /><br /><br /><br /><br />
     <Slider/>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     <h2>hi</h2>
    </div>
  );
}

export default App;
