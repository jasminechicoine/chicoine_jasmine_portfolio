<?php
   

    $connect = new mysqli('localhost', 'root', 'root', 'portfolio');


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $contactInfo = $_POST["contactInfo"];
    $msg = $_POST["msg"];

    
    $sql = "INSERT INTO contacts (fullName, contactInfo, msg) VALUES ('$fullName', '$contactInfo', '$msg')";

    if ($conn->query($sql) === TRUE) {
        echo " successful ";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>