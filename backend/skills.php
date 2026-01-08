<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}


require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $stmt = $conn->query("SELECT * FROM skills ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["name"]) || trim($data["name"]) === "") {
        http_response_code(400);
        echo json_encode(["error" => "Skill name required"]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO skills (name) VALUES (:name)");
    $stmt->execute(["name" => $data["name"]]);

    echo json_encode(["success" => true]);
}
