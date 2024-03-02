<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Project</title>
</head>
<body>
    <h2>Add Project</h2>
    <form action="add_project.php" method="post" enctype="multipart/form-data">
        <label>Title:</label><br>
        <input type="text" name="title"><br>
        <label>Description:</label><br>
        <textarea name="description"></textarea><br>
        <label>Image:</label><br>
        <input type="file" name="image"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>