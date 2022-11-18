<?php
	if(isset($_POST)) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$comments = $_POST['comments'];
		
		$domain = $_SERVER['HTTP_HOST'];
		$to = 'pedropuriihuaman@gmail.com';
		$subject = "Contacto desde el formulario del sitio $domain: $subject";
		$message = "
			<p>
				Datos enviados desde el formulario del sitio <b>$domain</b>
			</p>
			<ul>
				<li>Nombre: <b>$name</b></li>
				<li>Email: <b>$email</b></li>
				<li>Asunto: $subject</li>
				<li>Comentarios: $comments</li>
			</ul>
		";
		$headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envió Automático No Responder <no-reply@$domain>";

		$sendEmail = mail($to, $subject, $message, $headers);

		if($sendEmail) {
			$resp = [
				"error" => false,
				"message" => 'Tus datos han sido enviados'
			];
		} else {
			$resp = [
				"error" => true,
				"message" => 'Error al enviar tus datos. Intenta nuevamente.'
			];
		}

		// header('Access-Control-Allow-Origin: *'); // Acceso de todo los sitios
		header('Access-Control-Allow-Origin: https://viewsite.com'); // Acceso de un solo dominio
		header('Content-type: application/json');
		echo json_encode($resp);
		exit;
	}