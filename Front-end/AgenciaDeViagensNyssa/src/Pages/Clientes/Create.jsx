import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nome, setNome] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [telefone, setTelefone] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const criarOuEditarCliente = (e) => {
		e.preventDefault()

		const cliente = { nome, rg, cpf, telefone }

		if (id) {
			Api.put('/clientes/' + id, cliente).then((response) => {
				navigate('/Clientes')
			})
		} else {
			Api.post('/clientes/', cliente).then((response) => {
				navigate('/Clientes')
			})
		}
	}

	useEffect(() => {
		function getClienteById() {
			if (id) {
				Api.get(`/clientes/${id}`)
					.then((response) => {
						setNome(response.data.nome)
						setRg(response.data.rg)
						setCpf(response.data.cpf)
						setTelefone(response.data.telefone)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
		getClienteById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Criar'}</h2>
					</legend>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Rg"
								className="form-control s"
								placeholder="Rg"
								value={rg}
								onChange={(e) => setRg(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Cpf"
								className="form-control s"
								placeholder="Cpf"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Telefone"
								className="form-control s"
								placeholder="Telefone"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
							/>
						</div>
					</div>
            <div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarCliente(e)}
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
