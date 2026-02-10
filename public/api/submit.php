<?php
/**
 * Vidisha Educational Society - Professional Form Submission API
 * Optimized for GoDaddy Production Environments
 * Handles: Admission Enquiries & Career Applications
 */

// --- 1. CONFIGURATION ---
$config = [
    'admin_email' => 'admissions@vidishaedusociety.com',
    'website_name' => 'Vidisha Educational Society',
    'upload_dir' => '../uploads/', // Relative to public/api/ -> will be public/uploads/
    'allowed_origins' => [
        'https://vidishaedusociety.com',
        'https://www.vidishaedusociety.com',
        'http://localhost:5173'
    ],
    // SMTP Settings (If you use PHPMailer later, these are your placeholders)
    'use_smtp' => true,
    'smtp' => [
        'host' => 'smtp.secureserver.net',
        'port' => 587,
        'user' => 'admissions@vidishaedusociety.com',
        'pass' => 'Vidisha@321',
        'security' => 'tls'
    ]
];

// --- 2. SECURITY & HEADERS ---
header('Content-Type: application/json');

// Handle CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins']) || empty($origin)) {
    header("Access-Control-Allow-Origin: " . ($origin ?: '*'));
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// --- 3. UTILITIES ---
function send_json_response($success, $message, $data = [])
{
    echo json_encode(array_merge(['success' => $success, 'message' => $message], $data));
    exit;
}

// --- 4. MAIN PROCESSING ---
try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
    }

    $type = $_POST['type'] ?? 'enquiry';
    $formData = $_POST;
    unset($formData['type']);

    // Anti-Spam (Honeypot) - Optional
    if (!empty($_POST['website_url'])) {
        send_json_response(true, 'Submission received.');
    }

    // Sanitize Input
    $sanitizedData = [];
    foreach ($formData as $key => $value) {
        if (is_array($value)) {
            $sanitizedData[$key] = array_map(function ($v) {
                return htmlspecialchars(strip_tags(trim($v)));
            }, $value);
        } else {
            $sanitizedData[$key] = htmlspecialchars(strip_tags(trim($value)));
        }
    }

    // Handle File Uploads
    $attachments = [];
    if (!empty($_FILES)) {
        if (!file_exists($config['upload_dir'])) {
            mkdir($config['upload_dir'], 0755, true);
        }

        // Ensure .htaccess exists for security
        if (!file_exists($config['upload_dir'] . '.htaccess')) {
            file_put_contents($config['upload_dir'] . '.htaccess', "Options -ExecCGI\nAddHandler cgi-script .php .pl .py .jsp .asp .sh .cgi\n<Files ^(*.php|*.phps|*.sh|*.py|*.pl)>\norder deny,allow\ndeny from all\n</Files>");
        }

        $allowedMimeTypes = [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'image/jpg',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        foreach ($_FILES as $key => $file) {
            if ($file['error'] === UPLOAD_ERR_OK) {
                if ($file['size'] > 10 * 1024 * 1024)
                    continue; // 10MB limit

                $finfo = new finfo(FILEINFO_MIME_TYPE);
                $mimeType = $finfo->file($file['tmp_name']);

                if (!in_array($mimeType, $allowedMimeTypes))
                    continue;

                $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
                $safeName = preg_replace("/[^a-zA-Z0-9]/", "_", $key) . "_" . time() . "_" . bin2hex(random_bytes(2)) . "." . $ext;
                $targetPath = $config['upload_dir'] . $safeName;

                if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                    $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? "https" : "http";
                    $attachments[$key] = [
                        'name' => $file['name'],
                        'url' => "$protocol://$_SERVER[HTTP_HOST]/uploads/$safeName"
                    ];
                }
            }
        }
    }

    // --- 5. EMAIL CONSTRUCTION ---
    $subject = ($type === 'career')
        ? "Job App: " . ($sanitizedData['fullName'] ?? 'Applicant')
        : "Admissions: " . ($sanitizedData['fullName'] ?? 'Enquiry');

    $htmlContent = "
    <html>
    <head>
        <style>
            body { font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.5; }
            .card { max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; }
            .header { background: #3b0764; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.025em; }
            .content { padding: 32px; }
            .row { display: flex; border-bottom: 1px solid #f1f5f9; padding: 12px 0; }
            .label { font-weight: 700; color: #64748b; width: 40%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
            .value { width: 60%; font-weight: 600; color: #0f172a; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; }
            .btn { display: inline-block; padding: 10px 16px; background: #3b0764; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 12px; margin-top: 8px; }
            .attachment-header { background: #f1f5f9; padding: 8px 16px; font-weight: 800; color: #334155; margin-top: 24px; border-radius: 6px; }
        </style>
    </head>
    <body>
        <div class='card'>
            <div class='header'>
                <h1>" . ($type === 'career' ? "Career Portal Submission" : "New Admissions Lead") . "</h1>
            </div>
            <div class='content'>";

    foreach ($sanitizedData as $key => $value) {
        if ($key === 'declaration' || empty($value))
            continue;
        $label = ucwords(preg_replace('/(?<!^)[A-Z]/', ' $0', $key));
        $valDisplay = is_array($value) ? implode(', ', $value) : nl2br($value);
        $htmlContent .= "<div class='row'><div class='label'>$label</div><div class='value'>$valDisplay</div></div>";
    }

    if (!empty($attachments)) {
        $htmlContent .= "<div class='attachment-header'>ATTACHED DOCUMENTS</div>";
        foreach ($attachments as $key => $info) {
            $label = ucwords(preg_replace('/(?<!^)[A-Z]/', ' $0', $key));
            $htmlContent .= "<div class='row'><div class='label'>$label</div><div class='value'><a href='{$info['url']}' class='btn'>View {$info['name']}</a></div></div>";
        }
    }

    $htmlContent .= "
            </div>
            <div class='footer'>
                <p>Generated by Vidisha Educational Society Web Engine</p>
                <p>IP: {$_SERVER['REMOTE_ADDR']} | " . date('Y-m-d H:i:s') . "</p>
            </div>
        </div>
    </body>
    </html>";

    // --- 6. EMAIL SENDING ---
    $headers = [
        "MIME-Version: 1.0",
        "Content-type: text/html; charset=UTF-8",
        "From: {$config['website_name']} <no-reply@" . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) . ">",
        "Reply-To: " . ($sanitizedData['email'] ?? $config['admin_email']),
        "X-Mailer: PHP/" . phpversion()
    ];

    if ($config['use_smtp']) {
        // Here you would normally include PHPMailer
        // require 'PHPMailer/PHPMailerAutoload.php';
        // But we will stick to mail() for now as it's more compatible without extra files
    }

    if (mail($config['admin_email'], $subject, $htmlContent, implode("\r\n", $headers))) {
        send_json_response(true, 'Submission successful! Our team will contact you shortly.');
    } else {
        throw new Exception('The email server could not send the message. Please check your hosting mail settings.');
    }

} catch (Exception $e) {
    send_json_response(false, $e->getMessage());
}
?>