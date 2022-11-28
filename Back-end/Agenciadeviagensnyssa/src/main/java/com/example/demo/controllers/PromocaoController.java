package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Cliente;
import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Promocao;
import com.example.demo.repositorys.PromocaoRepository;
import com.example.demo.repositorys.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PromocaoController {

	@Autowired
	private PromocaoRepository promocaoRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	//READ ou GET all
	@GetMapping("/promocaos")
	public List<Promocao> getAllPromocaos(){
		return promocaoRepository.findAll();
	}
	
		//READ ou GET by id
	@GetMapping("/promocaos/{id}")
	public ResponseEntity<Promocao> getPromocaoById(@PathVariable Long id) {
		Promocao promocao = promocaoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Promção inexistente com id"));
		 return ResponseEntity.ok(promocao);
	}
			
	//POST ou CREATE
	@PostMapping("/promocaos")
	public Promocao createPromocao(@RequestBody Promocao promocao) {
		Cliente cliente = clienteRepository.findById(promocao.getCliente().getId()).get();
		promocao.setCliente(cliente);
		
		return promocaoRepository.save(promocao);
	}
		
	//PUT ou UPDATE
	@PutMapping("/promocaos/{id}")
	public ResponseEntity<Promocao> updatePromocao(@PathVariable Long id, @RequestBody Promocao promocaosDetails){
		
		Promocao promocao = promocaoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Promoção inexistente com id"));
		Cliente cliente = clienteRepository.findById(promocaosDetails.getCliente().getId()).get();
		
		promocao.setDestino(promocaosDetails.getDestino());
		promocao.setNomehospedagem(promocaosDetails.getNomehospedagem());
		promocao.setValor(promocaosDetails.getValor());	
		promocao.setCliente(cliente);
		
		Promocao newPromocao = promocaoRepository.save(promocao);
		
		return ResponseEntity.ok(newPromocao);
	}
	
	//DELETE
	@DeleteMapping("/promocaos/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePromocao(@PathVariable Long id){
		
		Promocao promocao = promocaoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Promoção inexistente com id"));
		
		promocaoRepository.delete(promocao);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
}
