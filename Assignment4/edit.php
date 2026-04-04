<?php
// Include database connection
include 'db.php';

// Check if ID is passed
if (!isset($_GET['id'])) {
    header("Location: index.php");
    exit;
}

$id = intval($_GET['id']);

// Fetch student data
$sql = "SELECT * FROM student WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if (!$student = mysqli_fetch_assoc($result)) {
    echo "Student not found.";
    exit;
}

// Update student
if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $update_sql = "UPDATE student SET name = ?, email = ? WHERE id = ?";
    $update_stmt = mysqli_prepare($conn, $update_sql);
    mysqli_stmt_bind_param($update_stmt, "ssi", $name, $email, $id);

    if (mysqli_stmt_execute($update_stmt)) {
        header("Location: index.php");
        exit;
    } else {
        echo "Update Error: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
</head>
<body>

<h2>Edit Student</h2>

<form method="POST">
    Name:
    <input type="text" name="name" value="<?php echo htmlspecialchars($student['name']); ?>" required>
    <br><br>
    Email:
    <input type="email" name="email" value="<?php echo htmlspecialchars($student['email']); ?>" required>
    <br><br>
    <button type="submit" name="update">Update Student</button>
</form>

<br>
<a href="index.php">Back to List</a>

</body>
</html>