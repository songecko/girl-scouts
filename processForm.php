<?php 

$response = array();

//Register to DB
$contact = $_POST['contact'];
$name = $contact['name'];
$email = $contact['email'];
$phone = $contact['phone'];
$pueblo = $contact['pueblo'];
$message = $contact['message'];

//Envio de email
$destinatario = "info@cgspr.com";
$asunto = "[Girl Scouts] Nuevo contacto";
$cuerpo = ' 
<html> 
	<head> 
		<title>Girl Scouts - Nuevo contacto</title> 
	</head> 
	<body> 
		<h2>Nuevo contacto</h2> 
		<p><b>Nombre: </b> '.$name.'</p> 
		<p><b>Email: </b> '.$email.'</p> 
		<p><b>Teléfono: </b> '.$phone.'</p>
		<p><b>Pueblo: </b> '.$pueblo.'</p>
		<p><b>Mensaje: </b> '.$message.'</p>
	</body> 
</html>
'; 

//Envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 

//Dirección del remitente 
$headers .= "From: ".$name." <".$email.">\r\n"; 

$response['sended'] = mail($destinatario, $asunto, $cuerpo, $headers);

echo json_encode($response);