import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Update() {

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
            .then(res => {
                setValues({ ...values, name: res.data[0].nomeDispositivo, ownerName: res.data[0].nomeDono, modelo: res.data[0].modelo, serialKey: res.data[0].serialKey })
            })
            .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        name: '',
        ownerName: '',
        modelo: '',
        serialKey: ''
    })
    const handleUpdate = (event) => {
        event.preventDefault()
        axios.put('http://localhost:8081/update/' + id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Editar Dispositivo</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite o nome" className="form-control" value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Nome do dono</label>
                        <input type="text" placeholder="Digite o nome" className="form-control" value={values.ownerName}
                            onChange={e => setValues({ ...values, ownerName: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Modelo</label>
                        <input type="text" placeholder="Digite o nome" className="form-control" value={values.modelo}
                            onChange={e => setValues({ ...values, modelo: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Serial Key</label>
                        <input type="text" placeholder="Digite o nome" className="form-control" value={values.serialKey}
                            onChange={e => setValues({ ...values, serialKey: e.target.value })} />
                    </div>
                    <button className="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Update