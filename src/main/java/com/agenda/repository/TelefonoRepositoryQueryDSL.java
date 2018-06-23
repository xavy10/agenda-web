package com.agenda.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.agenda.entity.Email;
import com.agenda.entity.QTelefono;
import com.agenda.entity.Telefono;
import com.querydsl.jpa.impl.JPAQuery;

@Repository("telefonoRepositoryQueryDSL")
public class TelefonoRepositoryQueryDSL {
	
	private QTelefono qTelefono = QTelefono.telefono;
	
	@PersistenceContext
	private EntityManager em;
	
	public List<Telefono> findByNumber(String numero,int clave) {
		JPAQuery<Telefono> query = new JPAQuery<>(em);
		List<Telefono> telefonos = query.select(qTelefono).from(qTelefono).where(qTelefono.numero.contains(numero).and(qTelefono.contacto.eq(clave))).orderBy(qTelefono.numero.desc()).fetch();
		return telefonos;
	}

	public List<Telefono> findByNumberAll(String numero) {
		JPAQuery<Telefono> query = new JPAQuery<>(em);
		List<Telefono> telefonos = query.select(qTelefono).from(qTelefono).where(qTelefono.numero.contains(numero)).orderBy(qTelefono.numero.desc()).groupBy(qTelefono.contacto).fetch();
		return telefonos;
	}
}
