package com.agenda.model;

import javax.persistence.Column;

public class ContactoModel {
	
	
	private String paterno;
	private String materno;
	private String nombre;
	private int edad;
	private String sexo;
	private String direccion;
	
	public ContactoModel() {}
	
	public ContactoModel(String paterno, String materno, String nombre, int edad, String sexo, String direccion) {
		super();
		this.paterno = paterno;
		this.materno = materno;
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
		this.direccion = direccion;
	}
	public String getPaterno() {
		return paterno;
	}
	public void setPaterno(String paterno) {
		this.paterno = paterno;
	}
	public String getMaterno() {
		return materno;
	}
	public void setMaterno(String materno) {
		this.materno = materno;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}
