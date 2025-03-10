<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = htmlspecialchars($_POST['full-name']);
    $phone = htmlspecialchars($_POST['phone-number']);
    $email = htmlspecialchars($_POST['email']);
    $websiteUrl = htmlspecialchars($_POST['website-url']);
    $comments = htmlspecialchars($_POST['comments']);
    $pageId = htmlspecialchars($_POST['page_id']);

    // Валидация
    if (empty($fullName) || empty($phone) || empty($email) || empty($websiteUrl)) {
        echo json_encode(['success' => false, 'message' => 'All required fields must be filled.']);
        exit;
    }

    $to = 'channel.my.honey@gmail.com'; 
    $subject = "New Request from $pageId";

    $message = "Full Name: $fullName\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Website URL: $websiteUrl\n";
    $message .= "Comments: $comments\n";
    $message .= "Page: $pageId\n";

    $headers = "From: no-reply@yourdomain.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
