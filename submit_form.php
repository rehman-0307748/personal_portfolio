<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // You can process the form data here, such as sending an email or saving it to a database.

    echo "Thank you, $name. Your message has been received.";
}
?>
