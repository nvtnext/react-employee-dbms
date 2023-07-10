import React from 'react'
import ss from "./hm.module.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Ed = () => {
    let [n, setN] = useState('')
    let [s, setS] = useState('')
    let [c, setC] = useState('')
    let {index} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://github.com/nvtnext/db.json.git/${index}`)
        .then((res)=>{
            setN(res.data.n)
            setS(res.data.s)
            setC(res.data.c)
        })
       
    },[])

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
    let upd=()=>{
        let payload = {n,s,c}
        axios.put(`http://localhost:3000/content/${index}`, payload)
        navigate("/us")
    }
  return (
    <div id={ss.crr}>
        <table>
            <tr>
                <th>Edit </th>

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
                <td><input type="text" value={c} onChange={cdata}  /></td>
            </tr>
            <tr>
                <th><button onClick={upd}>Update</button></th>
            </tr>
        </table>

    </div>
  )
}

export default Ed