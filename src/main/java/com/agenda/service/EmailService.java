package com.agenda.service;

import java.util.List;

import com.agenda.entity.Email;

public interface EmailService {

	public abstract Email addEmail(Email email);
	
	public abstract List<Email> getEmailsByContacto(int contacto);
	
	public abstract Email getEmailById(int id);
	
	public abstract Email editEmail(Email email);
	
	public abstract String deleteEmail(Email email);
	
	public abstract List<Email> getEmails(String email, int clave);
	
	public abstract List<Email> getAllEmails(String email);
}
