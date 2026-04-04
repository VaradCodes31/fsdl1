<?php
// Include database connection
include 'db.php';

// Check if ID is passed
if (!isset($_GET['id'])) {
    header("Location: index.php");
    exit;
}

$id = intval($_GET['id']);

// Delete student
$sql = "DELETE FROM student WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $id);

if (mysqli_stmt_execute($stmt)) {
    header("Location: index.php");
    exit;
} else {
    echo "Delete Error: " . mysqli_error($conn);
}
?>