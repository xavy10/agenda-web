package com.agenda.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.agenda.component.ContactoConverter;
import com.agenda.entity.Contacto;
import com.agenda.model.ContactoModel;
import com.agenda.repository.ContactoRepository;
import com.agenda.repository.ContactoRepositoryQueryDSL;
import com.agenda.service.ContactoService;


@Service("contactoServiceImpl")
public class ContactoServiceImpl implements ContactoService {
	
	@Autowired
	@Qualifier("contactoRepository")
	private ContactoRepository contactoRepository;
	
	@Autowired
	@Qualifier("contactoConverter")
	private ContactoConverter contactoConverter;
	
	@Autowired
	@Qualifier("contactoRepositoryQueryDSL")
	private ContactoRepositoryQueryDSL contactoRepositoryQueryDSL;

	@Override
	public ContactoModel addContact(ContactoModel contactoModel) {
		Contacto contacto = contactoRepository.save(contactoConverter.convertModelContactToContact(contactoModel));
		return contactoConverter.convertContactToModelContact(contacto);
	}

	@Override
	public List<Contacto> getAllContacts() {
		return contactoRepository.findAll();
	}

	@Override
	public Contacto getContactById(int id) {
		return contactoRepository.findById(id);
	}

	@Override
	public Contacto editContact(Contacto contacto) {
		return contactoRepository.save(contacto);
	}

	@Override
	public String deleteContact(Contacto contacto) {
		contactoRepository.delete(contacto);
		return "1";
	}

	@Override
	public List<Contacto> getContactsByName(String nombre, String paterno, String materno) {
		return contactoRepositoryQueryDSL.findByName(nombre, paterno, materno);
	}

	
	

}
