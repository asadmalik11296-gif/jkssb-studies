<?php
header('Content-Type: application/json');

// Check if file data is sent correctly
if (isset($_FILES['video_data']) && $_FILES['video_data']['error'] == 0) {
    
    $upload_dir = 'uploads/'; // Target directory
    
    // Auto-create folder if it does not exist
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }

    // Generate unique name using timestamp
    $student_id = isset($_POST['student_id']) ? $_POST['student_id'] : 'unknown';
    $file_name = 'student_' . $student_id . '_' . time() . '.webm';
    $target_file = $upload_dir . $file_name;

    // Move file from temp storage to your uploads folder
    if (move_uploaded_file($_FILES['video_data']['tmp_name'], $target_file)) {
        echo json_encode(['status' => 'success', 'message' => 'Video saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Could not save file on server.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No video data received.']);
}
?>
