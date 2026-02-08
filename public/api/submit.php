<?php
/**
 * Vidisha Educational Society - Form Submission API
 * Handles Contact Enquiries and Career Applications
 */

// --- CONFIGURATION ---
// Change this to your preferred email address
$adminEmail = "admissions@vidishaedusociety.com";
$websiteName = "Vidisha Educational Society";
$uploadDirectory = "../uploads/"; // Relative to this script in public/api/

// --- CORS & HEADERS ---
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // In production, change this to your domain
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// --- INITIALIZE RESPONSE ---
$response = [
    'success' => false,
    'message' => 'An unknown error occurred.'
];

// --- MAIN LOGIC ---
try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
    }

    // Get basic form data
    $type = $_POST['type'] ?? 'enquiry'; // 'enquiry' or 'career'
    $formData = $_POST;

    // Sanitize input
    foreach ($formData as $key => $value) {
        if (!is_array($value)) {
            $formData[$key] = htmlspecialchars(strip_tags(trim($value)));
        }
    }

    // Handle File Uploads (for Careers)
    $attachments = [];
    if (!empty($_FILES)) {
        if (!file_exists($uploadDirectory)) {
            mkdir($uploadDirectory, 0777, true);
        }

        foreach ($_FILES as $key => $file) {
            if ($file['error'] === UPLOAD_ERR_OK) {
                $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
                $allowed = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];

                if (!in_array($ext, $allowed)) {
                    continue; // Skip invalid files
                }

                $newFileName = $key . '_' . time() . '_' . uniqid() . '.' . $ext;
                $targetPath = $uploadDirectory . $newFileName;

                if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                    $attachments[$key] = [
                        'name' => $file['name'],
                        'path' => $targetPath,
                        'url' => (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]/uploads/$newFileName"
                    ];
                }
            }
        }
    }

    // Prepare Email Content
    $subject = ($type === 'career') ? "New Job Application: " . ($formData['fullName'] ?? 'Applicant') : "New Admission Enquiry: " . ($formData['fullName'] ?? 'Student');
    
    $message = "<html><body>";
    $message .= "<h2>" . ($type === 'career' ? "Career Portal Submission" : "Admission Enquiry Submission") . "</h2>";
    $message .= "<table border='1' cellpadding='10' style='border-collapse: collapse; width: 100%; max-width: 600px;'>";
    
    foreach ($formData as $key => $value) {
        if ($key === 'type' || $key === 'declaration') continue;
        
        // Format labels
        $label = ucwords(preg_replace('/(?<!^)[A-Z]/', ' $0', $key));
        $message .= "<tr><td style='background: #f8f9fa; font-weight: bold;'>$label</td><td>$value</td></tr>";
    }

    // List Attachments in Email
    if (!empty($attachments)) {
        $message .= "<tr><td colspan='2' style='background: #581c87; color: white; font-weight: bold;'>Attached Documents</td></tr>";
        foreach ($attachments as $key => $info) {
            $message .= "<tr><td style='background: #f8f9fa; font-weight: bold;'>" . ucwords($key) . "</td>";
            $message .= "<td><a href='{$info['url']}'>Download {$info['name']}</a></td></tr>";
        }
    }

    $message .= "</table>";
    $message .= "<p style='color: #666; font-size: 12px; margin-top: 20px;'>Submitted on: " . date("Y-m-d H:i:s") . " from " . $_SERVER['REMOTE_ADDR'] . "</p>";
    $message .= "</body></html>";

    // Set Email Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $websiteName <no-reply@" . $_SERVER['HTTP_HOST'] . ">" . "\r\n";
    $headers .= "Reply-To: " . ($formData['email'] ?? $adminEmail) . "\r\n";

    // Send Email
    if (mail($adminEmail, $subject, $message, $headers)) {
        $response['success'] = true;
        $response['message'] = 'Thank you! Your information has been successfully received.';
    } else {
        throw new Exception('Email server failed to send the message.');
    }

} catch (Exception $e) {
    $response['success'] = false;
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
exit;
?>
