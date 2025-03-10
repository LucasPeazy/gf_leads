<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $page_id = htmlspecialchars($_POST['page_id']);

    if (empty($name) || empty($phone) || empty($email)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }


    $to = 'channel.my.honey@gmail.com'; 
    $subject = "New Form Submission from $page_id";


    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Page: $page_id\n";

    $headers = "From: no-reply@yourdomain.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
