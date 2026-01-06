<?php
header("Access-Control-Allow-Origin: http://localhost:3002");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $stmt = $conn->query("SELECT id, title FROM projects ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 🔧 KRITISK RAD – PHP + Windows fix
    $_POST = json_decode(file_get_contents("php://input"), true) ?? [];

    if (!isset($_POST["title"]) || trim($_POST["title"]) === "") {
        http_response_code(400);
        echo json_encode(["error" => "Title required"]);
        exit;
    }

    $stmt = $conn->prepare(
        "INSERT INTO projects (title, created_at) VALUES (:title, NOW())"
    );
    $stmt->execute([
        ":title" => $_POST["title"]
    ]);

    echo json_encode(["success" => true]);
    exit;
}