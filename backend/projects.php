<?php
require 'config.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET': // Hämta alla projekt
        $stmt = $pdo->query("SELECT * FROM projects ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll());
        break;

    case 'POST': // Skapa nytt projekt
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO projects (title, description, image, link, user_id) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data['title'], $data['description'], $data['image'], $data['link'], 1]); // admin user_id=1
        echo json_encode(['success' => true]);
        break;

    case 'PUT': // Uppdatera projekt
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE projects SET title=?, description=?, image=?, link=? WHERE id=?");
        $stmt->execute([$data['title'], $data['description'], $data['image'], $data['link'], $data['id']]);
        echo json_encode(['success' => true]);
        break;

    case 'DELETE': // Ta bort projekt
        $id = $_GET['id'];
        $stmt = $pdo->prepare("DELETE FROM projects WHERE id=?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);
        break;
}
?>
