package com.agenda.service;

import java.util.List;

import com.agenda.entity.Telefono;

public interface TelefonoService {
	
	public abstract Telefono addPhone(Telefono telefono);
	
	public abstract List<Telefono> getPhonesByContact(int contacto);
	
	public abstract Telefono getPhoneById(int id);
	
	public abstract String deletePhone(Telefono telefono);
	
	public abstract List<Telefono> getPhonesByNumber(String number,int contacto);
	
	public abstract List<Telefono> getAllPhones(String number);

}
