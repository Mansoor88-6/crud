
import React,{useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Listing.css'

function Listing() {
const navigate = useNavigate()

const[data,setData] = useState([])
const[isDataUpdated,setIsDataUpdated] = useState(false)

const handleDelete = (id) => {
  axios.delete(`https://643ad66fbd3623f1b9bd07e3.mockapi.io/tables/${id}`)
    .then(response => {
      // console.log(response)
      if(response.statusText === "OK"){
        setIsDataUpdated(true)
        // console.log(isDataUpdated)
      }
      
    })
    .catch(err =>{
      console.log(err)
    })
}

const handleEdit = (id) => {
    navigate(`/update/${id}`)
}



useEffect(()=>{
    axios.get('https://643ad66fbd3623f1b9bd07e3.mockapi.io/tables',
    {headers:
      {'Content-Type':'application/json'}} )
    .then(response=>{ 
      setData(response.data)
      setIsDataUpdated(false) 
    })
    .catch(err => console.log(err) )
  },[isDataUpdated])


return (
  <>
  <Link to='/create'>
  <button >Create new article</button>
  </Link>
  
  {data.length > 0 && (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((item) => {
            return <th key={item}>{item}</th>;
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((objs) => {
          return (
            <tr key={objs.id}>
              {Object.values(objs).map((vals) => {
                return <td key={vals}>{vals}</td>;
              })}
              <td>
                <button onClick={() => handleEdit(objs.id)}>Edit</button> 
                <button onClick={() => handleDelete(objs.id)}>Delete</button> 
              </td>

            </tr>
            
          );
          
        })}
       
      </tbody>
    </table>
  )}
</>
  )
}

export default Listing