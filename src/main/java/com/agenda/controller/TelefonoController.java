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

import com.agenda.entity.Telefono;
import com.agenda.service.TelefonoService;
import com.google.gson.Gson;

@RestController
@RequestMapping("/phones")
public class TelefonoController {
	
	private static final Log LOG = LogFactory.getLog(TelefonoController.class);
	
	@Autowired
	@Qualifier("telefonoServiceImpl")
	private TelefonoService telefonoService;

	@PostMapping("/addPhone")
	public String addPhone(@RequestParam("telefono") String numero,@RequestParam("tipo") String tipo,@RequestParam("contacto") int contacto) {
		LOG.info("entro al anadir telefono");
		Telefono telefono = new Telefono(0, numero, tipo, contacto);
		if(telefonoService.addPhone(telefono)!=null) {
			return "1";
		}else {
			return "0";
		}
	}
	
	@PostMapping("/getPhonesByContact")
	public String getPhonesByContact(@RequestParam("contacto") int contacto) {
		LOG.info("entro al listado general de telefonos");
		List<Telefono> telefonos = telefonoService.getPhonesByContact(contacto);
		return new Gson().toJson(telefonos);
	}
	
	@PostMapping("/getPhoneById")
	public String getPhonesById(@RequestParam("clave") int id) {
		LOG.info("entro al detalles de telefonos");
		Telefono telefono = telefonoService.getPhoneById(id);
		return new Gson().toJson(telefono);
	}
	
	@PostMapping("/editPhone")
	public String editPhone(@RequestParam("telefono") String numero,@RequestParam("tipo") String tipo,@RequestParam("contacto") int contacto,@RequestParam("clave")int id) {
		LOG.info("entro al editar de telefonos");
		Telefono telefono = new Telefono(id, numero, tipo, contacto);
		if(telefonoService.addPhone(telefono)!=null) {
			return "1";
		}else {
			return "0";
		}
	}
	
	@PostMapping("/deletePhone")
	public String deletePhone(@RequestParam("clave") int id) {
		LOG.info("entro al eliminar de telefonos");
		Telefono telefono = telefonoService.getPhoneById(id);
		return telefonoService.deletePhone(telefono);
	}
	
	@PostMapping("/getPhonesByNumber")
	public String getPhonesByNumber(@RequestParam("buscarTelefono") String numero,@RequestParam("contacto") int contacto) {
		LOG.info("entro a la busqueda de telefonos");
		List<Telefono> telefonos = telefonoService.getPhonesByNumber(numero, contacto);
		return new Gson().toJson(telefonos);
	}
	
}
