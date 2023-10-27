import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Create() {
    const [values, setValues] = useState({
        name: '',
        ownerName: '',
        modelo: '',
        serialKey: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/dispositivo', values)
        .then(res => {
            console.log(res)
            alert("Sucesso!")
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Adicionar produto</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite o nome" className="form-control" 
                        onChange={e=>setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Nome do dono</label>
                        <input type="text" placeholder="Digite o nome" className="form-control"
                        onChange={e=>setValues({...values, ownerName: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Modelo</label>
                        <input type="text" placeholder="Digite o nome" className="form-control"
                        onChange={e=>setValues({...values, modelo: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Serial Key</label>
                        <input type="text" placeholder="Digite o nome" className="form-control"
                        onChange={e=>setValues({...values, serialKey: e.target.value})}/>
                    </div>
                    <button className="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Create