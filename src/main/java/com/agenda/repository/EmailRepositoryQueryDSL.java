package com.agenda.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.agenda.entity.Contacto;
import com.agenda.entity.Email;
import com.agenda.entity.QContacto;
import com.agenda.entity.QEmail;
import com.querydsl.jpa.impl.JPAQuery;

@Repository("emailRepositoryQueryDSL")
public class EmailRepositoryQueryDSL {
	
private QEmail qEmail = QEmail.email;
	
	@PersistenceContext
	private EntityManager em;
	
	public List<Email> findByEmail(String email,int clave) {
		JPAQuery<Email> query = new JPAQuery<>(em);
		List<Email> emails = query.select(qEmail).from(qEmail).where(qEmail.correo.contains(email).and(qEmail.contacto.eq(clave))).orderBy(qEmail.correo.desc()).fetch();
		return emails;
	}
	
	public List<Email> findByEmailAll(String email) {
		JPAQuery<Email> query = new JPAQuery<>(em);
		List<Email> emails = query.select(qEmail).from(qEmail).where(qEmail.correo.contains(email)).orderBy(qEmail.correo.desc()).groupBy(qEmail.contacto).fetch();
		return emails;
	}

}
