package com.agenda.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.entity.Email;
import com.agenda.service.EmailService;
import com.google.gson.Gson;

@RestController
@RequestMapping("/emails")
public class EmailController {
	
	private static final Log LOG = LogFactory.getLog(EmailController.class);
	
	@Autowired
	@Qualifier("emailServiceImpl")
	private EmailService emailService;
	
	@PostMapping("/addEmail")
	public String addEmail(@RequestParam("email") String correo,@RequestParam("tipo") String tipo,@RequestParam("clave") int contacto) {
		LOG.info("entro al anadir email");
		Email email = new Email(0, correo, tipo, contacto);
		if(emailService.addEmail(email) != null) {
			return "1";
		}else {
			return "0";
		}
	}
	
	@PostMapping("/getEmailsByContact")
	public String getEmailsByContact(@RequestParam("clave") int clave) {
		LOG.info("entro al listado general de emails");
		List<Email> emails = emailService.getEmailsByContacto(clave);
		String salida = "<div class='row'>\r\n" + 
				"    		<div class='col-md-2'>1</div>\r\n" + 
				"    		<div class='col-md-4'>elcrack@gmail.com</div>\r\n" + 
				"    		<div class='col-md-2'>personal</div>\r\n" + 
				"    		<div class='col-md-4'>\r\n" + 
				"                <input type='button' value='Detalles' class='btn btn-sm btn-outline-secondary'/>\\n +\r\n" + 
				"                <input type='button' value='Editar' class='btn btn-sm btn-outline-warning'  />\\n +\r\n" + 
				"                <input type='button' value='Eliminar' class='btn btn-sm btn-outline-danger' />\\n +\r\n" + 
				"    		</div>\r\n" + 
				"    	</div>";
		return new Gson().toJson(emails);
	}
	
	@PostMapping("/getEmailById")
	public String getEmailById(@RequestParam("clave") int id) {
		LOG.info("entro a detalles email");
		Email email = emailService.getEmailById(id);
		return new Gson().toJson(email);
	}
	
	@PostMapping("/editEmail")
	public String editEmail(@RequestParam("email") String correo,@RequestParam("tipo") String tipo,@RequestParam("contacto") int contacto,@RequestParam("clave") int id) {
		LOG.info("entro al editar email");
		Email email = new Email(id, correo, tipo, contacto);
		if(emailService.editEmail(email) != null) {
			return "1";
		}else {
			return "0";
		}
	}
	
	@PostMapping("/deleteEmail")
	public String deleteEmail(@RequestParam("clave") int id) {
		LOG.info("entro al eliminar email");
		Email email = emailService.getEmailById(id);
		emailService.deleteEmail(email);
		return "1";
	}
	
	@PostMapping("/getEmailsByEmail")
	public String getEmailsByEmail(@RequestParam("buscarEmail") String email,@RequestParam("clave") int clave) {
		LOG.info("entro al buscador email");
		List<Email> emails = emailService.getEmails(email,clave);
		return new Gson().toJson(emails);
	}

}
