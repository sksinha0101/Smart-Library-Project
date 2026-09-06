<?php
session_start(); // Session start karna zaruri hai taki user logged in rahe
include 'db_connect.php'; // Connection file ko jodna

// Check karna ki login button daba hai ya nahi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form se aaye hue username aur password ko pakadna
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Database me dhundhna ki kya ye username/password maujud hai?
    $sql = "SELECT * FROM admin_table WHERE username='$user' AND password='$pass'";
    $result = mysqli_query($conn, $sql);

    // Agar 1 bhi record match ho gaya matlab details sahi hain
    if (mysqli_num_rows($result) > 0) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['username'] = $user;
        echo "Login Successful! Welcome Admin.";
        
        // Note: Jab Member 2 ka UI ready ho jayega, toh hum yahan se use Dashboard par bhejenge:
        // header("Location: ../frontend/admin_dashboard.html"); 
    } else {
        echo "Error: Username ya Password galat hai!";
    }
} else {
    echo "Access Denied!";
}
?>