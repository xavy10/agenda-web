package com.agenda.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.entity.Telefono;

@Repository("telefonoRepository")
public interface TelefonoRepository extends JpaRepository<Telefono, Serializable> {
	
	public abstract List<Telefono> findByContacto(int contact);
	
	public abstract Telefono findById(int id);
		
}
