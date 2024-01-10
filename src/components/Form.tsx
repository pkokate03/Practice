import React, { useState } from 'react'

export default function Form(props:any) {

    const [name,setname]=useState("")
    //  {onSubmit}=props;
    const submit=(e:any)=>{
        e.preventDefault();
        props.onSubmit(name);
    }

    const handleChange=(e:any)=>{
        setname(e.target.value);
    }

  return (
    <form>
      <input type="text" onChange={handleChange} placeholder='Enter your name......'/>
      <button onClick={submit}>Submit</button>
    </form>
  )
}
