import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Update() {
  const {id} = useParams()
  const navigate = useNavigate()

  const [retData,setRetData] = useState()

  const onhandleInputChange = (event) =>{
    const {name,value} = event.target
    setRetData({...retData,[name]:value})

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        `https://643ad66fbd3623f1b9bd07e3.mockapi.io/tables/${id}`,
        JSON.stringify(retData),
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

  useEffect(()=>{
    axios.get(`https://643ad66fbd3623f1b9bd07e3.mockapi.io/tables/${id}`,{
      headers:{'Content-Type':'application/json'}
    }).then(res=> setRetData(res.data))
  },[id])

  return (
    <>
    {retData && (
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type='text' id='name' name="name" value={retData.name} onChange={onhandleInputChange}/>
      <br/>
      <label htmlFor="age">Age:</label>
      <input type='number' id='age' name="Age" value={retData.Age} onChange={onhandleInputChange}/>
      <br/>
      <label htmlFor="gender">Gender:</label>
      <select id='gender' name="Gender" value={retData.Gender} onChange={onhandleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          
      </select>
      <br/>
      
      <button type="submit">Submit</button>
      
      
    </form>
    )}
    
    
    </>
    
  )
}

export default Update