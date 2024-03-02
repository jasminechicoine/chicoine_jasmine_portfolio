<?php
include('connect.php');

$sql = "SELECT * FROM projects";
$stmt = $connection->query($sql);

if ($stmt->rowCount() > 0) {
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "Title: " . $row["title"]. " - Description: " . $row["description"]. "<br>";
        echo '<img src="images/' . $row["image"] . '" alt="' . $row["title"] . '"><br>';
    }
} else {
    echo "0 results";
}
?>