import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function Read() {
    const {id} = useParams()
    const [produto, setProduto] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            setProduto(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Detalhe dos dispositivos</h2>
                <h2>{produto.id}</h2>
                <h2>{produto.nomeDispositivo}</h2>
                <h2>{produto.nomeDono}</h2>
                <h2>{produto.modelo}</h2>
                <h2>{produto.serialKey}</h2>
                <Link to="/" className="btn btn-primary me-2">Back</Link>
                <Link to = {`/edit/${produto.id}`} className="btn btn-info">Edit</Link>
            </div>
        </div>
    )
}

export default Read