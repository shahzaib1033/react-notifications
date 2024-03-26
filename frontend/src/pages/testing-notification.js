import React, { useState } from 'react'
import axios from 'axios';

export default function Notification() {
  const [formData, setFormData] = useState({ deviceToken : localStorage.getItem('token') })
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:3030/notify', formData)
      if (response) {
      console.log("success")
      }
    }
    catch (err) { 

    }
  }
  const onChangeHandler = (e) => { 
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));  }
  return (
    <div>
      <h5>Try this By Entering the Details in the blow form and Click on the button to test out </h5>
      <form action="" >
        <label for="">Message Title</label>
        <br/>
        <input name='title' type="text" value={formData.title} onChange={onChangeHandler} required/>
        <br/>
        <label for="">Message Body</label>
        <br/>
        <input name='message' type="text" value={formData.message} onChange={onChangeHandler} required />
        <br/>
        <button className='btn' onClick={submit}>Test It</button>
        <br/>
      </form>
      
    </div>
  )
}
