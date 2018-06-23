package com.agenda.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.entity.Email;

@Repository("emailRepository")
public interface EmailRepository extends JpaRepository<Email, Serializable>{

	public abstract List<Email> findByContacto(int contacto);
	
	public abstract Email findById(int id);
	
}
