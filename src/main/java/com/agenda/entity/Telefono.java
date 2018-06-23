package com.agenda.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="telefono")
public class Telefono {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	@Column(name="numero")
	private String numero;
	
	@Column(name="tipo")
	private String tipo;
	
	@Column(name="contacto")
	private int contacto;
	
	public Telefono(){}

	public Telefono(int id, String numero, String tipo, int contacto) {
		super();
		this.id = id;
		this.numero = numero;
		this.tipo = tipo;
		this.contacto = contacto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getContacto() {
		return contacto;
	}

	public void setContacto(int contacto) {
		this.contacto = contacto;
	}
	
	
}
