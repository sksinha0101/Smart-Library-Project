<?php
$servername = "localhost";
$username = "root";  
$password = "";      
$database = "smart_library";
$port = 3307; // My New port

// Database se connection banana
$conn = mysqli_connect($servername, $username, $password, $database, $port);

// Connection check karna
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
   // echo "Database Connected Successfully!"; 
}
?>