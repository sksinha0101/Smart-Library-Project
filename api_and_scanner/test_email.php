<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    
    // YAHAN APNA DETAILS DAALO
    $mail->Username   = 'librarymana18@gmail.com'; // Apna Gmail dalo                   
    $mail->Password   = 'viullfrzhbtbafbf'; // Wo 16-digit App Password bina space ke dalo                              
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465;                                    

    $mail->setFrom('librarymana18@gmail.com', 'Smart Library');
    $mail->addAddress('beastphantom172@gmail.com'); // Test karne ke liye mera (Leader) ka email daal de

    $mail->isHTML(true);                                  
    $mail->Subject = 'Test Email - Smart Library';
    $mail->Body    = '<b>Hello!</b> <br> Ye Smart Library System ka automatic email test hai.';

    $mail->send();
    echo 'Email successfully send ho gaya!';
} catch (Exception $e) {
    echo "Email nahi gaya. Error: {$mail->ErrorInfo}";
}
?>