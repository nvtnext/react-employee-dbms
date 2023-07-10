import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ss from "./hm.module.css"

const Us = () => {
    let [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`https://github.com/nvtnext/db.json.git`)
        .then((response)=>{
            setData(response.data)
        })
    },[])
    let del=(id)=>{
        axios.delete(`https://github.com/nvtnext/db.json.git/${id}`)
        window.location.assign('/us')

    }
  return (
    <div id={ss.crr}>
        {data.map((x)=>{
            return(
                <div>
                    <table>
                        <tr>
                            <th>Details {x.id}</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{x.n}</td>
                        </tr>
                        <tr>
                        <td>Salary</td>
                            <td>{x.s}</td>
                        </tr>
                        <tr>
                        <td>Comapny</td>
                            <td>{x.c}</td>
                        </tr>
                        <tr>
                            <th><Link to={`/ed/${x.id}`}><button>Edit</button></Link></th>
                            <th><button onClick={()=>del(x.id)}>Delete</button></th>
                        </tr>
                    </table>
                </div>
            )
        })}

    </div>
  )
}

export default Us