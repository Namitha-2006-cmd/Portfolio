<?php
// $conn = mysqli_connect("sql302.infinityfree.com", "if0_40899873", "DnDFui9Dp9", "if0_40899873_Portfolio");
$conn = mysqli_connect("localhost","root","Nam!tha@2006","portfolio");
if (!$conn) {
    die("Connection failed");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];   
    $message = $_POST['message'];

    $sql = "INSERT INTO contact_messages (name, email, phone, message)
            VALUES ('$name', '$email', '$phone', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "success";   
    } else {
        echo "error";
    }
}

mysqli_close($conn);
?>
