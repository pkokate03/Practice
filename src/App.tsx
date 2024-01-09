import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import axios from 'axios';
import { useQuery } from 'react-query';


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

  const fetchData=()=>{
    setloading(true);
    axios.get(`${url}api/notes/all-notes`).then((resp)=>{
          setarr(resp.data[0]);
          setloading(false);
        //  console.log(resp.data[0]);
          return resp.data[0]; 
        }).catch(error=>{
          console.log("error fetching data....Server not started!")
          setloading(false);
        });
  }


  const {data, isLoading,error,refetch}=useQuery("notes",fetchData,{
    refetchOnWindowFocus: false
  });

  // useEffect(()=>{
  //   setloading(true);
  //   axios.get(`${url}api/notes/all-notes`).then((resp)=>{
  //     console.log(1)
  //     setarr(resp.data[0]);
  //     setloading(false);
      
  //   }).catch(error => {
  //     console.log(error);
  //     setloading(false);
  //   });

    
  // },[])

  if(loading){
   // console.log("loading");
    return <Spinner/>
  }



  return (
    <div className="App">
     <Navbar font-style={'Playfair Display,serif'} />
     <br /><br /><br /><br /><br /><br />
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo sunt nostrum incidunt dicta recusandae unde quo iure rem harum facilis temporibus, vitae magni aut officia. Et eius consequuntur ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea, cumque magnam provident nam ratione ex suscipit blanditiis at itaque commodi saepe rem accusamus quas assumenda est! Incidunt, quae laboriosam. </p>
     <br />
    
     {!error && arr?
     <>
     <p>{arr.author+
     arr.title+
     arr.description
     } <img style={{width:"180px"}} src={arr.image} alt="" /> </p>
     <h2 style={{color:"blue"}} >The above content was fetched from mongoDB</h2>
     </>:<h2 style={{color:"red"}} >Error fetching data!</h2>}
     <br />
     <button className='refetch' onClick={()=>refetch()} >Refetch data</button>
     <br /><br /><br /><br /><br /><br /><br />
     

     <div className="Pgrid">
     <h3>Grid Box</h3>
     <div className="grid">
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
     </div>
    </div>
    </div>
  );
}

export default App;
