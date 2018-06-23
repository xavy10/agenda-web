package com.agenda.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.agenda.entity.Telefono;
import com.agenda.repository.TelefonoRepository;
import com.agenda.repository.TelefonoRepositoryQueryDSL;
import com.agenda.service.TelefonoService;

@Service("telefonoServiceImpl")
public class TelefonoServiceImpl implements TelefonoService{

	@Autowired
	@Qualifier("telefonoRepository")
	private TelefonoRepository telefonoRepository;
	
	@Autowired
	@Qualifier("telefonoRepositoryQueryDSL")
	private TelefonoRepositoryQueryDSL telefonoRepositoryQueryDSL;

	@Override
	public Telefono addPhone(Telefono telefono) {
		return telefonoRepository.save(telefono);
	}

	@Override
	public List<Telefono> getPhonesByContact(int contacto) {
		return telefonoRepository.findByContacto(contacto);
	}

	@Override
	public Telefono getPhoneById(int id) {
		return telefonoRepository.findById(id);
	}

	@Override
	public String deletePhone(Telefono telefono) {
		telefonoRepository.delete(telefono);
		return "1";
	}

	@Override
	public List<Telefono> getPhonesByNumber(String number, int contacto) {
		return telefonoRepositoryQueryDSL.findByNumber(number, contacto);
	}

	@Override
	public List<Telefono> getAllPhones(String number) {
		return telefonoRepositoryQueryDSL.findByNumberAll(number);
	}
	
	
}
