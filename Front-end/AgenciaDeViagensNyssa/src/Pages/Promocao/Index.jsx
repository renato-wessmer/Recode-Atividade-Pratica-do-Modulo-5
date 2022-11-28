import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './Promocao.css'

export default function Index() {
    const [promocaos, setPromocaos] = useState([]);
    const [redirect, setRedirect] = useState(false); 


    useEffect(() => {
        Api.get('/promocaos')
            .then((response) => {
            setPromocaos(response.data);
            setRedirect(false);
        })
        .catch((error) => {
        console.log(error);
        });
    }, [redirect]);

    function deletePromocao(id){
        Api.delete(`/promocaos/${id}`)
        setRedirect(true);}

    return (
    <>
        <header className="header">
            <h1 className="container">Cadastro Promoção</h1>
        </header>
        <div className="container p-3">
        <Link to="/Promocaos-Create" className="btn btn-sakura mb-2">
            Postar Promoção
        </Link>
        <div className="table-responsive d-flex justify-content-center">
            <table className="table table-hover table-sm table-colors">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destino</th>
                        <th>Hospedagem</th>
                        <th>Valor</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {promocaos.map((promocao) => (
                        <tr className="text-white tr-hover" key={promocao.id}>
                            <td className="text-white">{promocao.id}</td>
                            <td className="text-white">{promocao.destino}</td>
                            <td className="text-white">{promocao.nomehospedagem}</td>
                            <td className="text-white">{promocao.valor}</td>
                            <td className="text-white">{promocao.cliente.nome}</td>
                            <td className="d-flex justify-content-end">
                                <Link
                                    to={`/Promocaos-Update/${promocao.id}`}
                                    className="btn btn-info"
                                >
                                Editar
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deletePromocao(promocao.id)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Deletar
                                </button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}
