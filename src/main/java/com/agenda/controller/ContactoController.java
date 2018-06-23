package com.agenda.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.entity.Contacto;
import com.agenda.entity.Email;
import com.agenda.entity.Telefono;
import com.agenda.model.ContactoModel;
import com.agenda.repository.EmailRepositoryQueryDSL;
import com.agenda.service.ContactoService;
import com.agenda.service.EmailService;
import com.agenda.service.TelefonoService;
import com.google.gson.Gson;


@RestController
@RequestMapping("/contactos")
public class ContactoController {
	
	private static final Log LOG = LogFactory.getLog(ContactoController.class);
	
	@Autowired
	@Qualifier("contactoServiceImpl")
	private ContactoService contactoService;
	
	@Autowired
	@Qualifier("telefonoServiceImpl")
	private TelefonoService telefonoService;
	
	@Autowired
	@Qualifier("emailServiceImpl")
	private EmailService emailService;
	
	@PostMapping("/addContact")
	public String addContact(@RequestParam("nombre") String nombre,@RequestParam("paterno") String paterno, @RequestParam("materno") String materno,
			@RequestParam("edad") int edad,@RequestParam("direccion") String direccion,@RequestParam("sexo") String sexo) {
		LOG.info("entro al anadir");
		ContactoModel contactoModel = new ContactoModel(paterno, materno, nombre, edad, sexo, direccion);
		if(contactoService.addContact(contactoModel) != null) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@GetMapping("/getAllContacts")
	public String getContacts() {
		LOG.info("entro al listado");
		String salida = new Gson().toJson(contactoService.getAllContacts());
		return salida;
	}
	
	@PostMapping("/getContactById")
	public String getContactById(@RequestParam("id") int id) {
		LOG.info("entro a buscar contacto por id");
		String salida = new Gson().toJson(contactoService.getContactById(id));
		return salida;
	}
	
	@PostMapping("/editContact")
	public String editContact(@RequestParam("nombre") String nombre,@RequestParam("paterno") String paterno, @RequestParam("materno") String materno,
			@RequestParam("edad") int edad,@RequestParam("direccion") String direccion,@RequestParam("sexo") String sexo,@RequestParam("id") int id) {
		LOG.info("entro al editar");
		Contacto contacto = new Contacto(id, paterno, materno, nombre, edad, sexo, direccion);
		if(contactoService.editContact(contacto) != null) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@PostMapping("/deleteContact")
	public String deleteContact(@RequestParam("id") int id) {
		LOG.info("entro a eliminar contacto");
		Contacto contacto = contactoService.getContactById(id);
		return contactoService.deleteContact(contacto);
	}
	
	@PostMapping("/getContactsByName")
	public String getContactsByName(@RequestParam("nombreBuscar") String nombreEntrada,@RequestParam("paternoBuscar") String paternoEntrada,@RequestParam("maternoBuscar") String maternoEntrada) {
		LOG.info("entro a buscar por nombre");
		String nombre = nombreEntrada;
		String paterno = paternoEntrada;
		String materno = maternoEntrada;
		return new Gson().toJson(contactoService.getContactsByName(nombre, paterno, materno));
	}
	
	@PostMapping("/getContactsByEmailOrPhone")
	public String getContactsByEmailOrPhone(@RequestParam("entradaBuscar") String entrada,@RequestParam("tipoBuscar") String tipo) {
		LOG.info("entro a buscar por email y telefono");
		List<Email> emails = null;
		List<Telefono> telefonos = null;
		List<Contacto> contactos = new ArrayList<>();
		if(tipo.equalsIgnoreCase("telefono")){
			telefonos = telefonoService.getAllPhones(entrada);
			for (Telefono telefono : telefonos) {
				contactos.add(contactoService.getContactById(telefono.getContacto()));
			}
		}else {
			emails = emailService.getAllEmails(entrada);
			for (Email email : emails) {
				contactos.add(contactoService.getContactById(email.getContacto()));
			}
		}
		return new Gson().toJson(contactos);
	}

}
