package com.agenda.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.agenda.entity.Contacto;
import com.agenda.entity.QContacto;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQuery;

@Repository("contactoRepositoryQueryDSL")
public class ContactoRepositoryQueryDSL {
	
	private QContacto qContacto = QContacto.contacto;
	
	@PersistenceContext
	private EntityManager em;
	
	public List<Contacto> findByName(String nombre,String paterno,String materno) {
		JPAQuery<Contacto> query = new JPAQuery<>(em);
		List<Contacto> contactos = query.select(qContacto).from(qContacto).where(qContacto.nombre.contains(nombre).and(qContacto.paterno.contains(paterno)).and(qContacto.materno.contains(materno))).orderBy(qContacto.nombre.desc(),qContacto.paterno.desc(),qContacto.materno.desc()).fetch();
		return contactos;
	}
	
}
