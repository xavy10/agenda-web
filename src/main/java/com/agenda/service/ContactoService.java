package com.agenda.service;

import java.util.List;

import com.agenda.entity.Contacto;
import com.agenda.model.ContactoModel;

public interface ContactoService {
	
	public abstract ContactoModel addContact(ContactoModel contactoModel);
	
	public abstract List<Contacto> getAllContacts();
	
	public abstract Contacto getContactById(int id);
	
	public abstract Contacto editContact(Contacto contacto);
	
	public abstract String deleteContact(Contacto contacto);

	public abstract List<Contacto> getContactsByName(String nombre,String paterno,String materno);
	
	
}
