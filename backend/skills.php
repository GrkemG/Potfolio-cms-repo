<?php
require 'config.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM skills ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll());
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO skills (name, level, user_id) VALUES (?, ?, ?)");
        $stmt->execute([$data['name'], $data['level'], 1]);
        echo json_encode(['success' => true]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE skills SET name=?, level=? WHERE id=?");
        $stmt->execute([$data['name'], $data['level'], $data['id']]);
        echo json_encode(['success' => true]);
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $pdo->prepare("DELETE FROM skills WHERE id=?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);
        break;
}
?>
