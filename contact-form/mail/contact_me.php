<?php
// Check for empty fields
if(empty($_POST['nombre']) || empty($_POST['email']) || empty($_POST['mensaje']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['nombre']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['mensaje']));

// Create the email and send the message
$to = "yourname@yourdomain.com"; // Add your email address inbetween the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = "Formulario de contacto:  $name";
$body = "Ha recibido un nuevo mensaje del formulario de contacto de su sitio web.\n\n"."Aquí están los detalles:\n\nNombre: $name\n\nEmail: $email\n\nMensaje:\n$message";
$header = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
