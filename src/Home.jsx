import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function Home() {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3  barra-rolagem">
                <h2>Inventário</h2>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-success">Create +</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do dispostivo</th>
                            <th>Nome do dono</th>
                            <th>modelo</th>
                            <th>serialKey</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((produto, index)=> {
                            return <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nomeDispositivo}</td>
                                <td>{produto.nomeDono}</td>
                                <td>{produto.modelo}</td>
                                <td>{produto.serialKey}</td>
                                <td>
                                    <Link to={`/read/${produto.id}`} className="btn btn-sm btn-info">Read</Link>
                                    <Link to = {`/edit/${produto.id}`} className="btn btn-sm btn-primary mx-2">Edit</Link>
                                    <button onClick={ () => handleDelete(produto.id)}  className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home