package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "promocao")
public class Promocao implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "promocao_destino", length = 50)
	private String destino;
	
	@Column(name = "promocao_nomehospedagem", length = 50)
	private String nomehospedagem;
	
	@Column(name = "promocao_valor")
	private String valor;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
//	Comando abaixo importa a chave estrangeira da tabela jogo
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	public Promocao() {
		super();
	}

	
	public Promocao(Long id, String destino, String nomehospedagem, String valor) {
		super();
		this.id = id;
		this.destino = destino;
		this.nomehospedagem = nomehospedagem;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getNomehospedagem() {
		return nomehospedagem;
	}

	public void setNomehospedagem(String nomehospedagem) {
		this.nomehospedagem = nomehospedagem;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
