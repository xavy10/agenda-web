package com.agenda.component;

import org.springframework.stereotype.Component;

import com.agenda.entity.Contacto;
import com.agenda.model.ContactoModel;

@Component("contactoConverter")
public class ContactoConverter {
	
	public Contacto convertModelContactToContact(ContactoModel contactoModel) {
		Contacto contacto = new Contacto();
		contacto.setNombre(contactoModel.getNombre());
		contacto.setPaterno(contactoModel.getPaterno());
		contacto.setMaterno(contactoModel.getMaterno());
		contacto.setEdad(contactoModel.getEdad());
		contacto.setSexo(contactoModel.getSexo());
		contacto.setDireccion(contactoModel.getDireccion());
		return contacto;
	}
	
	public ContactoModel convertContactToModelContact(Contacto contacto) {
		ContactoModel contactoModel = new ContactoModel();
		contactoModel.setNombre(contacto.getNombre());
		contactoModel.setPaterno(contacto.getPaterno());
		contactoModel.setMaterno(contacto.getMaterno());
		contactoModel.setEdad(contacto.getEdad());
		contactoModel.setSexo(contacto.getSexo());
		contactoModel.setDireccion(contacto.getDireccion());
		return contactoModel;
	}

}
