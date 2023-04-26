import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Create() {
  
  const[formData,setformData] = useState({
    name:'',
    Age:'',
    Gender:''
  })

  const navigate = useNavigate()

  const handleInputChange = event =>{
    const {name,value} = event.target
    setformData({...formData,[name]:value})
   
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        'https://643ad66fbd3623f1b9bd07e3.mockapi.io/tables',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
    <h2>Add your own data in this form</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type='text' id='name' name="name" onChange={handleInputChange}/>
      <br/>
      <label htmlFor="age">Age:</label>
      <input type='number' id='age' name="Age" onChange={handleInputChange}/>
      <br/>
      <label htmlFor="gender">Gender:</label>
      <select id='gender' name="Gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          
      </select>
      <br/>
      
      <button type="submit">Submit</button>
      
      
    </form>
    
    </>
    
  )
}

export default Create