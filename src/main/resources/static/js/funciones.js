$(document).ready(function(){
	$("#btn_nuevo").click(viewNuevoContacto);
        viewCatalogoContacto();
});

function viewNuevoContacto(){
	var vista = cargarVistaNuevoContacto();
	$('#cont-procesos').html(vista);
    $("#btn_nuevo").hide();
    cancelar();
}

function cargarVistaNuevoContacto(){
	return "<div class=\"row\">\n" +
    "        			<div class=\"col-md-4\"></div>\n" +
    "        			<div class=\"col-md-4\">\n" +
    "        			 <form action=\"javascript:guardarContacto();\"  id=\"form_registrar\"  >\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-12\"><h3>..::ALTA::..</h3></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Nombre:</div>\n" +
    "	                        <div class=\"col-md-6\"><input  name=\"nombre\"  type=\"text\" id=\"nombre\" required autocomplete=\"off\"/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido paterno</div>\n" +
    "	                        <div class=\"col-md-6\"><input  type=\"text\" name=\"paterno\" id=\"paterno\" required autocomplete=\"off\"/></div>\n" +
    "	                    </div>\n" +
    "	                     <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido materno</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"materno\" id=\"materno\" required autocomplete=\"off\"/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Edad</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"number\" min=\"1\" max=\"80\" name=\"edad\" id=\"edad\" required/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-12\">\n" +
    "	                            <input type=\"radio\" id=\"sexo\" required name=\"sexo\" value=\"Masculino\"/>Masculino       <input type=\"radio\" id=\"sexo\" name=\"sexo\" required value=\"Femenino\"/>Femenino\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Dirección</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"direccion\" id=\"direccion\" required autocomplete=\"off\"/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                    	<div class=\"col-md-6\">\n" +
    "	                    		<input type=\"submit\" value=\"Guardar\" class=\"btn btn-block btn-md btn-outline-success\"/>\n" +
    "	                    	</div>\n" +
    "	                    	<div class=\"col-md-6\">\n" +
    "	                    		<input type=\"button\" value=\"Cancelar\" id=\"btn_cancelar\" class=\"btn btn-block btn-md btn-outline-danger\"/>\n" +
    "	                    	</div>\n" +
    "	                    		\n" +
    "	                    </div>\n" +
    "               		</form>\n" +
    "        		</div>\n" +
    "        		 <div class=\"col-md-4\"></div>\n" +
    "            </div>";
}

function guardarContacto(){
    var datos = $("#form_registrar").serialize();
    $.ajax({
    type: 'POST',
    url: "contactos/addContact",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al registrar");
           $('#form_registrar').trigger("reset");
           viewCatalogoContacto();
       }else{
           alert("Ocurrio un error al registrar");
       }
    }
    });
}

function cancelar(){
    $("#btn_cancelar").bind("click",limpiar);
}

function limpiar(){
    $("#cont-procesos").html("");
    $("#btn_nuevo").show();
}

function buscarTipo(){
	var datos = $("#formBuscarTipo").serialize();
	$.ajax({
	    type: 'POST',
	    url: "contactos/getContactsByEmailOrPhone",
	    data: datos,   
	    success: function(data){
	    	var contactos = JSON.parse(data);
		       var tabla = "<form action=\"javascript:buscarNombre();\"  id=\"formBuscarNombre\">\n" +
	           "		<div class=\"row\">\n" +
	           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"nombreBuscar\" id=\"nombreBuscar\" placeholder=\"Ingresa el nombre\"></div>\n" +
	           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"paternoBuscar\" id=\"paternoBuscar\" placeholder=\"Ingresa el apellido paterno\"></div>\n" +
	           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"maternoBuscar\" id=\"maternoBuscar\" placeholder=\"Ingresa el apellido materno\"></div>\n" +
	           "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
	           "		</div>\n" +
	           "	</form>\n" +
	           "	<form action=\"javascript:buscarTipo();\" id=\"formBuscarTipo\" >	" +
	           "<div class=\"row\" style='margin-top: 20px'>\n" +
	           "			<div class=\"col-md-5\"><input class=\"form-control\" type=\"text\" name=\"entradaBuscar\" id=\"entradaBuscar\" placeholder=\"Ingresa el email o telefono\"></div>\n" +
	           "			<div class=\"col-md-3\"><input  type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='email' checked/>Email <input type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='telefono'/>Telefono  </div>\n" +
	           "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
	           "		</div>\n" +
	           "	</form>"+
	           "	<div class=\"row table-dark\" style='margin-top: 15px'>\n" +
	           "            <div class=\"col-md-1\">Num</div>\n" +
	           "            <div class=\"col-md-3\">Nombre</div>\n" +
	           "            <div class=\"col-md-1\">Edad</div>\n" +
	           "            <div class=\"col-md-3\">Direccion</div>\n" +
	           "            <div class=\"col-md-4\">Acciones</div>\n" +
	           "    </div>\n";
		    	for(var i = 0; i< contactos.length;i++){
		    		tabla += "    <div class=\"row\" style=\"margin-top:10px;\">\n" +
		    		"            <div class=\"col-md-1\">"+(i+1)+"</div>\n" +
	               "            <div class=\"col-md-3\">"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"</div>\n" +
	               "            <div class=\"col-md-1\">"+contactos[i].edad+"</div>\n" +
	               "            <div class=\"col-md-3\">"+contactos[i].direccion+"</div>\n" +
	               "            <div class=\"col-md-4\">\n" +
	               "                <input type=\"button\" value=\"Detalles\" class=\"btn btn-sm btn-outline-secondary\" onclick=\"javascript:detallesContacto("+contactos[i].id+");\"/>\n" +
	               "                <input type=\"button\" value=\"Editar\" class=\"btn btn-sm btn-outline-warning\" onclick=\"javascript:editarContacto("+contactos[i].id+");\" />\n" +
	               "                <input type=\"button\" value=\"Eliminar\" class=\"btn btn-sm btn-outline-danger\" onclick=\"javascript:eliminarContacto("+contactos[i].id+",'"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"');\" />\n" +
	               "                <input type=\"button\" value=\"Email's\" class=\"btn btn-sm btn-outline-info\" onclick=\"javascript:mostrarContactos("+contactos[i].id+")\"/>\n" +
	               "                <input type=\"button\" value=\"Telefonos\" class=\"btn btn-sm btn-outline-primary\" onclick=\"javascript:mostrarTelefonos("+contactos[i].id+")\"/>\n" +
	               "            </div>\n" +
	               "    </div>";
		    	}
		    	$("#cont-catalogo").html(tabla);
	    }
	    });
}

function buscarNombre(){
	var datos = $("#formBuscarNombre").serialize();
	$.ajax({
	    type: 'POST',
	    url: "contactos/getContactsByName",
	    data: datos,   
	    success: function(data){
	       var contactos = JSON.parse(data);
	       var tabla = "<form action=\"javascript:buscarNombre();\"  id=\"formBuscarNombre\">\n" +
           "		<div class=\"row\">\n" +
           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"nombreBuscar\" id=\"nombreBuscar\" placeholder=\"Ingresa el nombre\"></div>\n" +
           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"paternoBuscar\" id=\"paternoBuscar\" placeholder=\"Ingresa el apellido paterno\"></div>\n" +
           "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"maternoBuscar\" id=\"maternoBuscar\" placeholder=\"Ingresa el apellido materno\"></div>\n" +
           "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
           "		</div>\n" +
           "	</form>\n" +
           "	<form action=\"javascript:buscarTipo();\" id=\"formBuscarTipo\" >	" +
           "<div class=\"row\" style='margin-top: 20px'>\n" +
           "			<div class=\"col-md-5\"><input class=\"form-control\" type=\"text\" name=\"entradaBuscar\" id=\"entradaBuscar\" placeholder=\"Ingresa el email o telefono\"></div>\n" +
           "			<div class=\"col-md-3\"><input  type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='email' checked/>Email <input type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='telefono'/>Telefono  </div>\n" +
           "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
           "		</div>\n" +
           "	</form>"+
           "	<div class=\"row table-dark\" style='margin-top: 15px'>\n" +
           "            <div class=\"col-md-1\">Num</div>\n" +
           "            <div class=\"col-md-3\">Nombre</div>\n" +
           "            <div class=\"col-md-1\">Edad</div>\n" +
           "            <div class=\"col-md-3\">Direccion</div>\n" +
           "            <div class=\"col-md-4\">Acciones</div>\n" +
           "    </div>\n";
	    	for(var i = 0; i< contactos.length;i++){
	    		tabla += "    <div class=\"row\" style=\"margin-top:10px;\">\n" +
	    		"            <div class=\"col-md-1\">"+(i+1)+"</div>\n" +
               "            <div class=\"col-md-3\">"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"</div>\n" +
               "            <div class=\"col-md-1\">"+contactos[i].edad+"</div>\n" +
               "            <div class=\"col-md-3\">"+contactos[i].direccion+"</div>\n" +
               "            <div class=\"col-md-4\">\n" +
               "                <input type=\"button\" value=\"Detalles\" class=\"btn btn-sm btn-outline-secondary\" onclick=\"javascript:detallesContacto("+contactos[i].id+");\"/>\n" +
               "                <input type=\"button\" value=\"Editar\" class=\"btn btn-sm btn-outline-warning\" onclick=\"javascript:editarContacto("+contactos[i].id+");\" />\n" +
               "                <input type=\"button\" value=\"Eliminar\" class=\"btn btn-sm btn-outline-danger\" onclick=\"javascript:eliminarContacto("+contactos[i].id+",'"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"');\" />\n" +
               "                <input type=\"button\" value=\"Email's\" class=\"btn btn-sm btn-outline-info\" onclick=\"javascript:mostrarContactos("+contactos[i].id+")\"/>\n" +
               "                <input type=\"button\" value=\"Telefonos\" class=\"btn btn-sm btn-outline-primary\" onclick=\"javascript:mostrarTelefonos("+contactos[i].id+")\"/>\n" +
               "            </div>\n" +
               "    </div>";
	    	}
	    	$("#cont-catalogo").html(tabla);
	    }
	    });
}

function viewCatalogoContacto(){
	$.ajax({
	    type: 'GET',
	    url: "contactos/getAllContacts",
	    success: function(data){
	    	var contactos = JSON.parse(data);
	    	var tabla = "<form action=\"javascript:buscarNombre();\"  id=\"formBuscarNombre\">\n" +
            "		<div class=\"row\">\n" +
            "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"nombreBuscar\" id=\"nombreBuscar\" placeholder=\"Ingresa el nombre\"></div>\n" +
            "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"paternoBuscar\" id=\"paternoBuscar\" placeholder=\"Ingresa el apellido paterno\"></div>\n" +
            "			<div class=\"col-md-3\"><input class=\"form-control\" type=\"text\" name=\"maternoBuscar\" id=\"maternoBuscar\" placeholder=\"Ingresa el apellido materno\"></div>\n" +
            "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
            "		</div>\n" +
            "	</form>\n" +
            "	<form	action=\"javascript:buscarTipo();\" id=\"formBuscarTipo\">" +
            "<div class=\"row\" style='margin-top: 20px'>\n" +
            "			<div class=\"col-md-5\"><input class=\"form-control\" type=\"text\" name=\"entradaBuscar\" id=\"entradaBuscar\" placeholder=\"Ingresa el email o telefono\"></div>\n" +
            "			<div class=\"col-md-3\"><input  type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='email' checked/>Email <input type=\"radio\" name=\"tipoBuscar\" id=\"tipoBuscar\" value='telefono'/>Telefono  </div>\n" +
            "			<div class=\"col-md-3\"><input class=\"btn btn-block btn-success\" type=\"submit\" value=\"Buscar\"></div>\n" +
            "		</div>\n" +
            "	</form>"+
            "	<div class=\"row table-dark\" style='margin-top: 15px'>\n" +
            "            <div class=\"col-md-1\">Num</div>\n" +
            "            <div class=\"col-md-3\">Nombre</div>\n" +
            "            <div class=\"col-md-1\">Edad</div>\n" +
            "            <div class=\"col-md-3\">Direccion</div>\n" +
            "            <div class=\"col-md-4\">Acciones</div>\n" +
            "    </div>\n";
	    	for(var i = 0; i< contactos.length;i++){
	    		tabla += "    <div class=\"row\" style=\"margin-top:10px;\">\n" +
	    		"            <div class=\"col-md-1\">"+(i+1)+"</div>\n" +
                "            <div class=\"col-md-3\">"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"</div>\n" +
                "            <div class=\"col-md-1\">"+contactos[i].edad+"</div>\n" +
                "            <div class=\"col-md-3\">"+contactos[i].direccion+"</div>\n" +
                "            <div class=\"col-md-4\">\n" +
                "                <input type=\"button\" value=\"Detalles\" class=\"btn btn-sm btn-outline-secondary\" onclick=\"javascript:detallesContacto("+contactos[i].id+");\"/>\n" +
                "                <input type=\"button\" value=\"Editar\" class=\"btn btn-sm btn-outline-warning\" onclick=\"javascript:editarContacto("+contactos[i].id+");\" />\n" +
                "                <input type=\"button\" value=\"Eliminar\" class=\"btn btn-sm btn-outline-danger\" onclick=\"javascript:eliminarContacto("+contactos[i].id+",'"+contactos[i].nombre+" "+contactos[i].paterno+" "+contactos[i].materno+"');\" />\n" +
                "                <input type=\"button\" value=\"Email's\" class=\"btn btn-sm btn-outline-info\" onclick=\"javascript:mostrarContactos("+contactos[i].id+")\"/>\n" +
                "                <input type=\"button\" value=\"Telefonos\" class=\"btn btn-sm btn-outline-primary\" onclick=\"javascript:mostrarTelefonos("+contactos[i].id+")\"/>\n" +
                "            </div>\n" +
                "    </div>";
	    	}
	    	$("#cont-catalogo").html(tabla);
	    }
	    });
}

function detallesContacto(clave){
	$.ajax({
	    type: 'POST',
	    url: "contactos/getContactById",
	    data: "id="+clave,   
	    success: function(data){
	      var contacto = JSON.parse(data);
	      var contenido = mostrarContacto(contacto,"Detalles");
	      $("#cont-procesos").html(contenido);
	      cancelar();
	    }
	    });
}

function mostrarContacto(contacto,opcion){
	var salida = "<div class=\"row\">\n" +
    "        			<div class=\"col-md-4\"></div>\n" +
    "        			<div class=\"col-md-4\">\n" +
    "        			 <form action=\"#\"  id=\"form_registrar\"  >\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-12\"><h3>..::"+opcion+"::..</h3></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Clave:</div>\n" +
    "	                        <div class=\"col-md-6\"><input name=\"id\"  type=\"text\" id=\"id\" required readonly autocomplete=\"off\" value='"+contacto.id+"'/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Nombre:</div>\n" +
    "	                        <div class=\"col-md-6\"><input name=\"nombre\"  type=\"text\" id=\"nombre\" required autocomplete=\"off\" value='"+contacto.nombre+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido paterno</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"paterno\" id=\"paterno\" required autocomplete=\"off\" value='"+contacto.paterno+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                     <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido materno</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"materno\" id=\"materno\" required autocomplete=\"off\" value='"+contacto.materno+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Edad</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"number\" min=\"1\" max=\"80\" name=\"edad\" id=\"edad\" required value='"+contacto.edad+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n";
	
	var sexo = contacto.sexo.toUpperCase();
	if(sexo=="MASCULINO"){
	salida +=	"	            <div class=\"col-md-12\">\n" +
	    "	                            <input type=\"radio\" id=\"sexo\" required name=\"sexo\" value=\"Masculino\" checked disabled/>Masculino       <input type=\"radio\" id=\"sexo\" name=\"sexo\" required value=\"Femenino\"  disabled/>Femenino\n" +
	    "	                    </div>\n";	                    
	}else{
		salida +=	"	            <div class=\"col-md-12\">\n" +
	    "	                            <input type=\"radio\" id=\"sexo\" required name=\"sexo\" value=\"Masculino\"  disabled/>Masculino       <input type=\"radio\" id=\"sexo\" name=\"sexo\" required value=\"Femenino\" checked disabled/>Femenino\n" +
	    "	                    </div>\n";	
	}
    
    
    
    salida += "	            </div>\n" +
    		"<div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Dirección</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"direccion\" id=\"direccion\" required autocomplete=\"off\" value='"+contacto.direccion+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                    	<div class=\"col-md-12\">\n" +
    "	                    		<input type=\"button\" value=\"Cancelar\" id=\"btn_cancelar\" class=\"btn btn-block btn-md btn-outline-danger\"/>\n" +
    "	                    	</div>\n" +
    "	                    		\n" +
    "	                    </div>\n" +
    "               		</form>\n" +
    "        		</div>\n" +
    "        		 <div class=\"col-md-4\"></div>\n" +
    "            </div>";
    return salida;
}


/////Contactos

function mostrarEditarContacto(contacto,opcion){
	var salida = "<div class=\"row\">\n" +
    "        			<div class=\"col-md-4\"></div>\n" +
    "        			<div class=\"col-md-4\">\n" +
    "        			 <form action=\"javascript:editarContactoDatos();\"  id=\"form_registrar\"  >\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-12\"><h3>..::"+opcion+"::..</h3></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Clave:</div>\n" +
    "	                        <div class=\"col-md-6\"><input name=\"id\"  type=\"text\" id=\"id\" required  autocomplete=\"off\" value='"+contacto.id+"' readonly/></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Nombre:</div>\n" +
    "	                        <div class=\"col-md-6\"><input name=\"nombre\"  type=\"text\" id=\"nombre\" required autocomplete=\"off\" value='"+contacto.nombre+"' /></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido paterno</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"paterno\" id=\"paterno\" required autocomplete=\"off\" value='"+contacto.paterno+"' /></div>\n" +
    "	                    </div>\n" +
    "	                     <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Apellido materno</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"materno\" id=\"materno\" required autocomplete=\"off\" value='"+contacto.materno+"' /></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Edad</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"number\" min=\"1\" max=\"80\" name=\"edad\" id=\"edad\" required value='"+contacto.edad+"' /></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n";
	
	var sexo = contacto.sexo.toUpperCase();
	if(sexo=="MASCULINO"){
	salida +=	"	            <div class=\"col-md-12\">\n" +
	    "	                            <input type=\"radio\" id=\"sexo\" required name=\"sexo\" value=\"Masculino\" checked />Masculino       <input type=\"radio\" id=\"sexo\" name=\"sexo\" required value=\"Femenino\" />Femenino\n" +
	    "	                    </div>\n";	                    
	}else{
		salida +=	"	            <div class=\"col-md-12\">\n" +
	    "	                            <input type=\"radio\" id=\"sexo\" required name=\"sexo\" value=\"Masculino\"  />Masculino       <input type=\"radio\" id=\"sexo\" name=\"sexo\" required value=\"Femenino\" checked />Femenino\n" +
	    "	                    </div>\n";	
	}
    salida += "	            </div>\n" +
    		"<div class=\"row\">\n" +
    "	                        <div class=\"col-md-6\">Dirección</div>\n" +
    "	                        <div class=\"col-md-6\"><input type=\"text\" name=\"direccion\" id=\"direccion\" required autocomplete=\"off\" value='"+contacto.direccion+"' /></div>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"row\">\n" +
    "	                    	<div class=\"col-md-6\">\n" +
    "	                    		<input type=\"submit\" value=\"Guardar\" class=\"btn btn-block btn-md btn-outline-success\"/>\n" +
    "	                    	</div>\n" +
    "	                    	<div class=\"col-md-6\">\n" +
    "	                    		<input type=\"button\" value=\"Cancelar\" id=\"btn_cancelar\" class=\"btn btn-block btn-md btn-outline-danger\"/>\n" +
    "	                    	</div>\n" +
    "	                    		\n" +
    "	                    </div>\n" +
    "               		</form>\n" +
    "        		</div>\n" +
    "        		 <div class=\"col-md-4\"></div>\n" +
    "            </div>";
    return salida;
}

function editarContacto(clave){
	$.ajax({
	    type: 'POST',
	    url: "contactos/getContactById",
	    data: "id="+clave,   
	    success: function(data){
	      var contacto = JSON.parse(data);
	      var contenido = mostrarEditarContacto(contacto,"Editar");
	      $("#cont-procesos").html(contenido);
	      cancelar();
	    }
	    });
}

function editarContactoDatos(){
	var datos = $("#form_registrar").serialize();
    $.ajax({
    type: 'POST',
    url: "contactos/editContact",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al editar");
           viewCatalogoContacto();
       }else{
           alert("Ocurrio un error al editar");
       }
    }
    });
}

function eliminarContacto(clave,nombre){
    var eleccion = confirm("Estas seguro de eliminar a "+nombre);
    if(eleccion){
    	$.ajax({
    	    type: 'POST',
    	    url: "contactos/deleteContact",
    	    data: "id="+clave,   
    	    success: function(data){
    	      if(data=="1"){
    	    	  alert("Se elimino el contacto con exito");
    	    	  viewCatalogoContacto()
    	      }else{
    	    	  alert("Ocurrio un problema al eliminar");
    	      }
    	    }
    	});
    }
}

function mostrarContactos(clave){
    dialog = $( "#cont-email").dialog({
        autoOpen: false,
        height: 600,
        width: 800,
        modal: true,
      });
    dialog.dialog( "open" );
  $("#cont-email").html(cargarVistaContacto());
  $("#claveContacto").val(clave);
  viewCatalogoEmails();
}

function registrarEmail(){
	var datos = $("#form_registrar_modulo").serialize();
	datos += "&clave="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "emails/addEmail",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al registrar el email");
           $("#registrarContacto").html("");
      	 	$("#btn_nuevo_modulo").show();
      	 	viewCatalogoEmails();
       }else{
           alert("Ocurrio un error al registrar");
       }
    }
    });
}

function viewCatalogoEmails(){
	var datos = "clave="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "emails/getEmailsByContact",
    data: datos,   
    success: function(data){
    	var emails = JSON.parse(data);
    	var contenido = "<div class='row table-dark' style='margin-top: 20px'>\r\n" + 
		"    		<div class='col-md-2'>Num</div>\r\n" + 
		"    		<div class='col-md-4'>Email</div>\r\n" + 
		"    		<div class='col-md-2'>Tipo</div>\r\n" + 
		"    		<div class='col-md-4'>Opciones</div>\r\n" + 
		"    	</div>";
    	for(var i = 0; i<emails.length; i++){
    		contenido += "<div class='row'>\r\n" + 
			"    		<div class='col-md-2'>"+(i+1)+"</div>\r\n" + 
			"    		<div class='col-md-4'>"+emails[i].correo+"</div>\r\n" + 
			"    		<div class='col-md-2'>"+emails[i].tipo+"</div>\r\n" + 
			"    		<div class='col-md-4'>\r\n" + 
			"                <input type='button' value='Detalles' class='btn btn-sm btn-outline-secondary' onclick=\"javascript:detallesEmail("+emails[i].id+");\"/>" + 
			"                <input type='button' value='Editar' class='btn btn-sm btn-outline-warning'  onclick=\"javascript:editarEmail("+emails[i].id+");\" />" + 
			"                <input type='button' value='Eliminar' class='btn btn-sm btn-outline-danger' onclick=\"javascript:eliminarEmail("+emails[i].id+",'"+emails[i].correo+"');\" />" + 
			"    		</div>\r\n" + 
			"    	</div>"
    	}
    	$("#catalogo-email").html(contenido);
    }
    });
}

function eliminarEmail(clave,correo){
	var respuesta = confirm("Estas seguro de eliminar el correo "+correo);
	if(respuesta){
		var datos = "clave="+clave;
	    $.ajax({
	    type: 'POST',
	    url: "emails/deleteEmail",
	    data: datos,   
	    success: function(data){
	       if(data=="1"){
	           alert("Exito al eliminar el email");
	      	 	viewCatalogoEmails();
	       }else{
	           alert("Ocurrio un error al eliminar");
	       }
	    }
	    });
	}
}

function editarEmail(clave){
	var datos = "clave="+clave;
    $.ajax({
    type: 'POST',
    url: "emails/getEmailById",
    data: datos,   
    success: function(data){
    	var email = JSON.parse(data);
    	var contenido = "<form action=\"javascript:editarDatosEmail("+clave+");\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el email</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='email' id='email' name='email'class='form-control' required value='"+email.correo+"'/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n";
    	var tipo = email.tipo.toUpperCase();
    	if(tipo == "PERSONAL"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Personal' required checked required/>Personal  <input type='radio' id='tipo' name='tipo' value='Trabajo' required />Trabajo \r\n"; 
    	}else{
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Personal' required required/>Personal  <input type='radio' id='tipo' name='tipo' value='Trabajo' required checked />Trabajo \r\n"; 
    	}
		contenido += "					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" +
		"                	<div class='col-md-6'> \r\n" + 
		"                		<input type='submit' value='Guardar' class='btn btn-block btn-md btn-outline-success'/> \r\n" + 
		"                	</div>\r\n" + 
		"                	<div class='col-md-6'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
    	$("#registrarContacto").html(contenido);
   	 	cancelarModulo();
    }
    });
}

function editarDatosEmail(clave){
	var datos = $("#form_registrar_modulo").serialize();
	datos += "&contacto="+$("#claveContacto").val()+"&clave="+clave;
    $.ajax({
    type: 'POST',
    url: "emails/editEmail",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al editar el email");
           $("#registrarContacto").html("");
      	 	viewCatalogoEmails();
       }else{
           alert("Ocurrio un error al editar");
       }
    }
    });
}

function detallesEmail(clave){
	var datos = "clave="+clave;
    $.ajax({
    type: 'POST',
    url: "emails/getEmailById",
    data: datos,   
    success: function(data){
    	var email = JSON.parse(data);
    	var contenido = "<form action=\"javascript:registrarEmail();\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el email</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='email' id='email' name='email'class='form-control' readonly value='"+email.correo+"'/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n";
    	var tipo = email.tipo.toUpperCase();
    	if(tipo == "PERSONAL"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Personal' required checked disabled/>Personal  <input type='radio' id='tipo' name='tipo' value='Trabajo' required disabled/>Trabajo \r\n"; 
    	}else{
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Personal' required disabled/>Personal  <input type='radio' id='tipo' name='tipo' value='Trabajo' required checked disabled/>Trabajo \r\n"; 
    	}
		contenido += "					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" + 
		"                	<div class='col-md-12'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
    	$("#registrarContacto").html(contenido);
   	 	cancelarModulo();
    }
    });
}

function nuevoContacto(){
	 var vista = "<form action=\"javascript:registrarEmail();\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el email</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='email' id='email' name='email'class='form-control' required/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n" + 
		"						<input type='radio' id='tipo' name='tipo' value='Personal' required checked/>Personal  <input type='radio' id='tipo' name='tipo' value='Trabajo' required/>Trabajo \r\n" + 
		"					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" + 
		"                	<div class='col-md-6'> \r\n" + 
		"                		<input type='submit' value='Guardar' class='btn btn-block btn-md btn-outline-success'/> \r\n" + 
		"                	</div>\r\n" + 
		"                	<div class='col-md-6'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
	 $("#registrarContacto").html(vista);
	 cancelarModulo();
	 $("#btn_nuevo_modulo").hide();
}

function cancelarModulo(){
    $("#btn_cancelar_modulo").bind("click",limpiarModulo);
}

function limpiarModulo(){
    $("#registrarContacto").html("");
    $("#btn_nuevo_modulo").show();
}

function buscarEmail(){
	var datos = $("#form_buscar_email").serialize();
	datos += "&clave="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "emails/getEmailsByEmail",
    data: datos,   
    success: function(data){
    	var emails = JSON.parse(data);
    	var contenido = "<div class='row table-dark' style='margin-top: 20px'>\r\n" + 
		"    		<div class='col-md-2'>Num</div>\r\n" + 
		"    		<div class='col-md-4'>Email</div>\r\n" + 
		"    		<div class='col-md-2'>Tipo</div>\r\n" + 
		"    		<div class='col-md-4'>Opciones</div>\r\n" + 
		"    	</div>";
    	for(var i = 0; i<emails.length; i++){
    		contenido += "<div class='row'>\r\n" + 
			"    		<div class='col-md-2'>"+(i+1)+"</div>\r\n" + 
			"    		<div class='col-md-4'>"+emails[i].correo+"</div>\r\n" + 
			"    		<div class='col-md-2'>"+emails[i].tipo+"</div>\r\n" + 
			"    		<div class='col-md-4'>\r\n" + 
			"                <input type='button' value='Detalles' class='btn btn-sm btn-outline-secondary' onclick=\"javascript:detallesEmail("+emails[i].id+");\"/>" + 
			"                <input type='button' value='Editar' class='btn btn-sm btn-outline-warning'  onclick=\"javascript:editarEmail("+emails[i].id+");\" />" + 
			"                <input type='button' value='Eliminar' class='btn btn-sm btn-outline-danger' onclick=\"javascript:eliminarEmail("+emails[i].id+",'"+emails[i].correo+"');\" />" + 
			"    		</div>\r\n" + 
			"    	</div>"
    	}
    	$("#catalogo-email").html(contenido);
    }
    });
}

function cargarVistaContacto(){
	return "<div class='row' id=\"registrarContacto\"></div> "+
           "  	<div id=\"buscadorEmail\">       "+
            " 		<form action=\"javascript:buscarEmail();\" id=\"form_buscar_email\">"+
	         "   		<div class=\"row\">  "+
		       "     		<div class=\"col-md-8\">"+
		         "   			<input type=\"text\"class=\"form-control\" id=\"buscarEmail\" name=\"buscarEmail\" placeholder=\"Ingresa el email\"/>"+
		          "  		</div>"+
		           " 		<div class=\"col-md-2\">"+
		           " 			<input type=\"submit\" class=\"btn btn-block btn-success\" value=\"Buscar\"/>"+
		           " 		</div>"+
		           " 		<div class=\"col-md-2\">"+
		            "			<input type=\"button\" id='btn_nuevo_modulo' class=\"btn btn-block btn-primary\" value=\"Nuevo\" onclick='nuevoContacto()'/>"+
		            "		</div>"+
	            	"	</div>"+
            	"	</form>"+
            	"</div>"+
        "<input type='hidden' id='claveContacto' name='claveContacto' value='0'/>"+
            	
            	"<div id=\"catalogo-email\">"+
            	"</div>";
}


//////////////////////////TELEFONOS


function mostrarTelefonos(clave){
	
	dialog = $( "#cont-phone").dialog({
        autoOpen: false,
        height: 600,
        width: 800,
        modal: true,
      });
    dialog.dialog( "open" );
  $("#cont-phone").html(cargarVistaTelefono());
  $("#claveContacto").val(clave);
  viewCatalogoTelefonos();
}

function nuevoTelefono(){
	 var vista = "<form action=\"javascript:registrarTelefono();\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el telefono</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='tel' id='telefono' name='telefono'class='form-control' required/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n" + 
		"						<input type='radio' id='tipo' name='tipo' value='Movil' required checked/>Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required/>Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required/>Trabajo \r\n" + 
		"					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" + 
		"                	<div class='col-md-6'> \r\n" + 
		"                		<input type='submit' value='Guardar' class='btn btn-block btn-md btn-outline-success'/> \r\n" + 
		"                	</div>\r\n" + 
		"                	<div class='col-md-6'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
	 $("#registrarContacto").html(vista);
	 cancelarModulo();
	 $("#btn_nuevo_modulo").hide();
}

function registrarTelefono(){
	var datos = $("#form_registrar_modulo").serialize();
	datos += "&contacto="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "phones/addPhone",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al registrar el telefono");
           $("#registrarContacto").html("");
      	 	$("#btn_nuevo_modulo").show();
      	 	viewCatalogoTelefonos();
       }else{
           alert("Ocurrio un error al telefono");
       }
    }
    });
}

function viewCatalogoTelefonos(){
	var datos = "contacto="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "phones/getPhonesByContact",
    data: datos,   
    success: function(data){
    	var emails = JSON.parse(data);
    	var contenido = "<div class='row table-dark' style='margin-top: 20px'>\r\n" + 
		"    		<div class='col-md-2'>Num</div>\r\n" + 
		"    		<div class='col-md-4'>Telefono</div>\r\n" + 
		"    		<div class='col-md-2'>Tipo</div>\r\n" + 
		"    		<div class='col-md-4'>Opciones</div>\r\n" + 
		"    	</div>";
    	for(var i = 0; i<emails.length; i++){
    		contenido += "<div class='row'>\r\n" + 
			"    		<div class='col-md-2'>"+(i+1)+"</div>\r\n" + 
			"    		<div class='col-md-4'>"+emails[i].numero+"</div>\r\n" + 
			"    		<div class='col-md-2'>"+emails[i].tipo+"</div>\r\n" + 
			"    		<div class='col-md-4'>\r\n" + 
			"                <input type='button' value='Detalles' class='btn btn-sm btn-outline-secondary' onclick=\"javascript:detallesTelefono("+emails[i].id+");\"/>" + 
			"                <input type='button' value='Editar' class='btn btn-sm btn-outline-warning'  onclick=\"javascript:editarTelefono("+emails[i].id+");\" />" + 
			"                <input type='button' value='Eliminar' class='btn btn-sm btn-outline-danger' onclick=\"javascript:eliminarTelefono("+emails[i].id+",'"+emails[i].numero+"');\" />" + 
			"    		</div>\r\n" + 
			"    	</div>"
    	}
    	$("#catalogo-telefono").html(contenido);
    }
    });
}

function eliminarTelefono(clave,correo){
	var respuesta = confirm("Estas seguro de eliminar el telefono: "+correo);
	if(respuesta){
		var datos = "clave="+clave;
	    $.ajax({
	    type: 'POST',
	    url: "phones/deletePhone",
	    data: datos,   
	    success: function(data){
	       if(data=="1"){
	           alert("Exito al eliminar el telefono");
	      	 	viewCatalogoTelefonos();
	       }else{
	           alert("Ocurrio un error al eliminar");
	       }
	    }
	    });
	}
}

function editarTelefono(clave){
	var datos = "clave="+clave;
    $.ajax({
    type: 'POST',
    url: "phones/getPhoneById",
    data: datos,   
    success: function(data){
    	var email = JSON.parse(data);
    	var contenido = "<form action=\"javascript:editarDatosTelefono("+clave+");\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el email</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='tel' id='telefono' name='telefono'class='form-control' required value='"+email.numero+"'/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n";
    	var tipo = email.tipo.toUpperCase();
    	if(tipo == "MOVIL"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required checked/>Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required />Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required />Trabajo \r\n";
    	}
    	if(tipo == "CASA"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required />Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required  checked/>Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required />Trabajo \r\n";
    	}
    	if(tipo == "TRABAJO"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required />Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required />Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required  checked/>Trabajo \r\n";
    	}
		contenido += "					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" +
		"                	<div class='col-md-6'> \r\n" + 
		"                		<input type='submit' value='Guardar' class='btn btn-block btn-md btn-outline-success'/> \r\n" + 
		"                	</div>\r\n" + 
		"                	<div class='col-md-6'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
    	$("#registrarContacto").html(contenido);
   	 	cancelarModulo();
    }
    });
}

function editarDatosTelefono(clave){
	var datos = $("#form_registrar_modulo").serialize();
	datos += "&contacto="+$("#claveContacto").val()+"&clave="+clave;
    $.ajax({
    type: 'POST',
    url: "phones/editPhone",
    data: datos,   
    success: function(data){
       if(data=="1"){
           alert("Exito al editar el Telefono");
           $("#registrarContacto").html("");
      	 	viewCatalogoTelefonos();
       }else{
           alert("Ocurrio un error al editar");
       }
    }
    });
}

function detallesTelefono(clave){
	var datos = "clave="+clave;
    $.ajax({
    type: 'POST',
    url: "phones/getPhoneById",
    data: datos,   
    success: function(data){
    	var email = JSON.parse(data);
    	var contenido = "<form action=\"javascript:registrarEmail();\"  id=\"form_registrar_modulo\" >\r\n" + 
		"			<div class='row'> \r\n" + 
		"				<div class='col-md-6'>Ingresa el email</div> \r\n" + 
		"				<div class='col-md-6'> \r\n" + 
		"					<input type='email' id='email' name='email'class='form-control' readonly value='"+email.numero+"'/> \r\n" + 
		"				</div> \r\n" + 
		"			 </div>\r\n" + 
		"				<div class='row'> \r\n" + 
		"					<div class='col-md-6'>Tipo</div> \r\n" + 
		"					<div class='col-md-6'> \r\n";
    	var tipo = email.tipo.toUpperCase();
    	if(tipo == "MOVIL"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required disabled checked/>Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required disabled/>Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required disabled/>Trabajo \r\n";
    	}
    	if(tipo == "CASA"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required disabled/>Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required disabled checked/>Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required disabled/>Trabajo \r\n";
    	}
    	if(tipo == "TRABAJO"){
    		contenido += "<input type='radio' id='tipo' name='tipo' value='Movil' required disabled/>Movil  <input type='radio' id='tipo' name='tipo' value='Casa' required disabled />Casa  <input type='radio' id='tipo' name='tipo' value='Trabajo' required disabled checked/>Trabajo \r\n";
    	}
		contenido += "					</div> \r\n" + 
		"				</div> \r\n" + 
		"                <div class='row'> \r\n" + 
		"                	<div class='col-md-12'>\r\n" + 
		"                		<input type='button' value='Cancelar' id='btn_cancelar_modulo' class='btn btn-block btn-md btn-outline-danger'/>\r\n" + 
		"                	</div>	\r\n" + 
		"                </div> \r\n" + 
		"		</form>";
    	$("#registrarContacto").html(contenido);
   	 	cancelarModulo();
    }
    });
}

function buscarTelefono(){
	var datos = $("#form_buscar_telefono").serialize();
	datos += "&contacto="+$("#claveContacto").val();
    $.ajax({
    type: 'POST',
    url: "phones/getPhonesByNumber",
    data: datos,   
    success: function(data){
    	var emails = JSON.parse(data);
    	var contenido = "<div class='row table-dark' style='margin-top: 20px'>\r\n" + 
		"    		<div class='col-md-2'>Num</div>\r\n" + 
		"    		<div class='col-md-4'>Email</div>\r\n" + 
		"    		<div class='col-md-2'>Tipo</div>\r\n" + 
		"    		<div class='col-md-4'>Opciones</div>\r\n" + 
		"    	</div>";
    	for(var i = 0; i<emails.length; i++){
    		contenido += "<div class='row'>\r\n" + 
			"    		<div class='col-md-2'>"+(i+1)+"</div>\r\n" + 
			"    		<div class='col-md-4'>"+emails[i].numero+"</div>\r\n" + 
			"    		<div class='col-md-2'>"+emails[i].tipo+"</div>\r\n" + 
			"    		<div class='col-md-4'>\r\n" + 
			"                <input type='button' value='Detalles' class='btn btn-sm btn-outline-secondary' onclick=\"javascript:detallesEmail("+emails[i].id+");\"/>" + 
			"                <input type='button' value='Editar' class='btn btn-sm btn-outline-warning'  onclick=\"javascript:editarEmail("+emails[i].id+");\" />" + 
			"                <input type='button' value='Eliminar' class='btn btn-sm btn-outline-danger' onclick=\"javascript:eliminarEmail("+emails[i].id+",'"+emails[i].numero+"');\" />" + 
			"    		</div>\r\n" + 
			"    	</div>"
    	}
    	$("#catalogo-telefono").html(contenido);
    }
    });
}

function cargarVistaTelefono(){
	return "<div class='row' id=\"registrarContacto\"></div> "+
           "  	<div id=\"buscadorEmail\">       "+
            " 		<form action=\"javascript:buscarTelefono();\" id=\"form_buscar_telefono\">"+
	         "   		<div class=\"row\">  "+
		       "     		<div class=\"col-md-8\">"+
		         "   			<input type=\"tel\"class=\"form-control\" id=\"buscarTelefono\" name=\"buscarTelefono\" placeholder=\"Ingresa el numero telfonico\"/>"+
		          "  		</div>"+
		           " 		<div class=\"col-md-2\">"+
		           " 			<input type=\"submit\" class=\"btn btn-block btn-success\" value=\"Buscar\"/>"+
		           " 		</div>"+
		           " 		<div class=\"col-md-2\">"+
		            "			<input type=\"button\" id='btn_nuevo_modulo' class=\"btn btn-block btn-primary\" value=\"Nuevo\" onclick='nuevoTelefono()'/>"+
		            "		</div>"+
	            	"	</div>"+
            	"	</form>"+
            	"</div>"+
        "<input type='hidden' id='claveContacto' name='claveContacto' value='0'/>"+
            	
            	"<div id=\"catalogo-telefono\">"+
            	"</div>";
}
