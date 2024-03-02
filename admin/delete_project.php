<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM projects WHERE id=:id";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo "Project deleted successfully";
    } else {
        echo "Error deleting project";
    }
}
?>