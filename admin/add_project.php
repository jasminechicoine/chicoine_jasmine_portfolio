<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_FILES['image']['name'];
    $image_temp = $_FILES['image']['tmp_name'];
    
    move_uploaded_file($image_temp, "images/$image");

    $sql = "INSERT INTO projects (title, description, image) VALUES (:title, :description, :image)";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':image', $image);

    if ($stmt->execute()) {
        echo "New project added successfully";
    } else {
        echo "Error: Unable to add project";
    }
}
?>