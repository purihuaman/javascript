<?php
	var_dump($_FILES);
  
	if(isset($_FILES['file'])) {
		$nameFile = $_FILES['file']['name'];
		$tmpFile = $_FILES['file']['tmp_name'];
		$error = $_FILES['file']['error'];
		
		$destination = "../../assets/files/$nameFile";
		
		$upload = move_uploaded_file($nameFile, $destination);
		
		if($upload) {
			$resp = array(
				"err" => false,
				"status" => http_response_code(200),
				"statusText" => "Archivo $nameFile subido con éxito",
				"files" => $_FILES['file']
			);
		} else {
			$resp = array(
				"err" => true,
				"status" => http_response_code(400),
				"statusText" => "Error al subir el archivo $nameFile",
				"files" => $_FILES['file']
			);
		}

		echo json_encode($resp);
	}