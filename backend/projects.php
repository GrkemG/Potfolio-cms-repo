<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}


require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $stmt = $conn->prepare(
        "INSERT INTO projects (title, created_at) VALUES ('TEST FROM PHP', NOW())"
    );
    $stmt->execute();

    echo json_encode(["success" => true]);
    exit;
}
