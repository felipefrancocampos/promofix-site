<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$host = "smtp.uni5.net";
$port = 465;
$user = "atendimento@promofix.com.br";
$pass = '2k25$Pr0mof1x';

$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$message = $_POST["message"] ?? "";

if (!$name || !$email || !$message) {
    echo "Erro: campos inválidos.";
    exit;
}

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->isSMTP();
$mail->Host = $host;
$mail->SMTPAuth = true;
$mail->Username = $user;
$mail->Password = $pass;
$mail->SMTPSecure = "ssl";
$mail->Port = $port;

$mail->setFrom($user, "Contato do Site Promofix");
$mail->addReplyTo($email, $name);
$mail->addAddress($user);
$mail->Subject = "Novo contato pelo site Promofix vindo de $name";
$mail->msgHTML("
    <h3>Novo contato enviado pelo site Promofix</h3>
    <p><strong>Nome:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Mensagem:</strong><br>$message</p>
");

if ($mail->send()) {
    echo "Enviado com sucesso!";
} else {
    echo "Erro ao enviar: " . $mail->ErrorInfo;
}