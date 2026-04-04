<?php
// Include database connection
$conn = mysqli_connect("localhost", "root", "root", "studentdb");

// Check connection
if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

// --- INSERT DATA ---
if (isset($_POST['add'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $sql = "INSERT INTO student (name, email) VALUES ('$name', '$email')";

    if (mysqli_query($conn, $sql)) {
        // Redirect to refresh page
        header("Location: index.php");
        exit;
    } else {
        echo "Insert Error: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>

<h2>Student Management</h2>

<!-- ADD FORM -->
<form method="POST">
    Name:
    <input type="text" name="name" required>
    Email:
    <input type="email" name="email" required>
    <button type="submit" name="add">Add Student</button>
</form>

<br><br>

<!-- DISPLAY TABLE -->
<table border="1" cellpadding="10">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
</tr>

<?php
$sql = "SELECT * FROM student";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['name']}</td>
            <td>{$row['email']}</td>
            <td>
                <a href='edit.php?id={$row['id']}'>Edit</a> |
                <a href='delete.php?id={$row['id']}' onclick=\"return confirm('Delete this student?')\">Delete</a>
            </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='4'>No data found</td></tr>";
}
?>

</table>

</body>
</html>