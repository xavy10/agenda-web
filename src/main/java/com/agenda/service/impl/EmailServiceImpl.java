package com.agenda.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.agenda.entity.Email;
import com.agenda.repository.EmailRepository;
import com.agenda.repository.EmailRepositoryQueryDSL;
import com.agenda.service.EmailService;

@Service("emailServiceImpl")
public class EmailServiceImpl implements EmailService {
	
	@Autowired
	@Qualifier("emailRepository")
	private EmailRepository emailRepository;
	
	@Autowired
	@Qualifier("emailRepositoryQueryDSL")
	private EmailRepositoryQueryDSL emailRepositoryQueryDSL;
	
	@Override
	public Email addEmail(Email email) {
		return emailRepository.save(email);
	}

	@Override
	public List<Email> getEmailsByContacto(int contacto) {
		return emailRepository.findByContacto(contacto);
	}

	@Override
	public Email getEmailById(int id) {
		return emailRepository.findById(id);
	}

	@Override
	public Email editEmail(Email email) {
		return emailRepository.save(email);
	}

	@Override
	public String deleteEmail(Email email) {
		emailRepository.delete(email);
		return "1";
	}

	@Override
	public List<Email> getEmails(String email,int clave) {
		return emailRepositoryQueryDSL.findByEmail(email,clave);
	}

	@Override
	public List<Email> getAllEmails(String email) {
		return emailRepositoryQueryDSL.findByEmailAll(email);
	}

}
