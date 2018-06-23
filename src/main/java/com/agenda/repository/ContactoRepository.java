package com.agenda.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.entity.Contacto;

@Repository("contactoRepository")
public interface ContactoRepository extends JpaRepository<Contacto, Serializable> {
	
	public abstract Contacto findById(int id);
	
	
}
