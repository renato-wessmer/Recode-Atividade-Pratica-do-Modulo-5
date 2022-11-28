import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [destino, setDestino] = useState('')
	const [nomehospedagem, setNomeHospedagem] = useState('')
	const [valor, setvalor] = useState('')
	const [cliente, setCliente] = useState({ id: 0 })
	const [clientes, setClientes] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		Api.get('/clientes')
			.then((response) => {
				setClientes(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const criarOuEditarPromocao = (e) => {
		e.preventDefault()

		const promocao = { destino, nomehospedagem, valor, cliente }

		if (id) {
			Api.put('/promocaos/' + id, promocao).then((response) => {
				navigate('/Promocaos')
			})
		} else {
			Api.post('/promocaos/', promocao).then((response) => {
				navigate('/Promocaos')
			})
		}
	}

	useEffect(() => {
		function getPromocaoById() {
			if (id) {
				Api.get(`/promocaos/${id}`)
					.then((response) => {
						setDestino(response.data.destino)
						setNomeHospedagem(response.data.nomehospedagem)
						setvalor(response.data.valor)
						setCliente({
							id: response.data.cliente.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getPromocaoById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Criar'}</h2>
					</legend>
					<div className="form-group mb-3">
						<div className="align">
							<select
								id="ClienteId_cliente"
								name="ClienteId_cliente"
								className="form-select s"
								onChange={(e) =>
									setCliente({ id: Number.parseInt(e.target.value) })
								}
							>
								<option value="DEFAULT">
									{id ? cliente.nome : 'Escolha um Cliente'}
								</option>
								{clientes.map((cliente) => (
									<option key={cliente.id} value={cliente.id}>
										{cliente.nome}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Destino"
								className="form-control s"
								placeholder="Destino"
								value={destino}
								onChange={(e) => setDestino(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="NomeHospedagem"
								className="form-control s"
								placeholder="Nome da hospedagem"
								value={nomehospedagem}
								onChange={(e) => setNomeHospedagem(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Valor"
								className="form-control s"
								placeholder="Valor"
								value={valor}
								onChange={(e) => setvalor(e.target.value)}
							/>
						</div>
					</div>
            <div className="d-grid-sm d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarPromocao(e)}
					>
						Enviar
					</button>
					<Link
						to="/Promocaos"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						Cancelar
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
