import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ss from "./hm.module.css"

const Cr = () => {
    let [n, setN] = useState("")
    let [s, setS] = useState("")
    let [c, setC] = useState("")
    let navigate = useNavigate()
    let ndata=(e)=>{
        e.preventDefault()
        setN(e.target.value)

    }
    let sdata=(e)=>{
        e.preventDefault()
        setS(e.target.value)

    }
    let cdata=(e)=>{
        e.preventDefault()
        setC(e.target.value)

    }
    let subb=(e)=>{
        e.preventDefault()
        let payload = {n,s,c}
        axios.post(`https://github.com/nvtnext/db.json.git`, payload)
        navigate('/us')

    }

    
  return (
    <div id={ss.crr}>
        <table>
            <tr>
                <th colSpan="2">Enter Details</th>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" value={n} onChange={ndata} /></td>
            </tr> 
            <tr>
                <td>Salary</td>
                <td><input type="text" value={s} onChange={sdata} /></td>
            </tr>
            <tr>
                <td>Company</td>
                <td><input type="text"  value={c} onChange={cdata}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button onClick={subb}>Submit</button></th>
            </tr>
        </table>
    </div>
  )
}

export default Cr