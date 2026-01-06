<?php
require 'config.php';
header('Content-Type: application/json');

$stmt = $pdo->query("SELECT * FROM site_info LIMIT 1");
echo json_encode($stmt->fetch());
?>
