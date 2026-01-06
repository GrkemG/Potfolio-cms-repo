<?php
$host = "localhost";           // MAMP default
$dbname = "portfolio_cms";     // din databas
$user = "root";                // MAMP default
$pass = "root";                // MAMP default

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
