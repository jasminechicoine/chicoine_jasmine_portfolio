<?php
include_once("../includes/config.php");
include_once("../includes/functions.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {

}
?>


<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="image" accept="image/*">
    <input type="submit" name="submit" value="Update Project">
</form>