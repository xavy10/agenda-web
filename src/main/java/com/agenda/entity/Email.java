package com.agenda.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="email")
public class Email {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	@Column(name="correo")
	private String correo;
	
	@Column(name="tipo")
	private String tipo;
	
	@Column(name="contacto")
	private int contacto;
	
	public Email(){}

	public Email(int id, String correo, String tipo, int contacto) {
		super();
		this.id = id;
		this.correo = correo;
		this.tipo = tipo;
		this.contacto = contacto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
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
