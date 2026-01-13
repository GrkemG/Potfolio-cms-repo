<?php
$host = "localhost";
$dbname = "portfolio_cms";
$user = "root";
$pass = "cowmilk";
$port = 3306; // SAMMA SOM I MAMP

try {
    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8",
        $user,
        $pass
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
