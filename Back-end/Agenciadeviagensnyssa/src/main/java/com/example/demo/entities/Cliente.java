package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id;
	
	@Column(name = "cliente_nome", length = 100)
	private String nome;
	
	@Column(name = "cliente_rg", length = 11, unique = true)
	private String rg;
	
	@Column(name = "cliente_cpf", length = 11, unique = true)
	private String cpf;
	
	@Column(name = "cliente_telefone", length = 20)
	private String telefone;

	//	Um para muitos precisa ser mapeado, pois um jogo pode estar em várias salas, ele mapeia em que sala está cada jogo
	@JsonIgnore
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Promocao> promocaos = new ArrayList<Promocao>();
	
	public List<Promocao> getPromocaos() {
		return promocaos;
	}
	
	public void setPromocaos(List<Promocao> promocaos) {
		this.promocaos = promocaos;
	}	

	public Cliente() {
		super();
	}

	public Cliente(long id, String nome, String rg, String cpf, String telefone) {
		super();
		this.id = id;
		this.nome = nome;
		this.rg = rg;
		this.cpf = cpf;
		this.telefone = telefone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

}
