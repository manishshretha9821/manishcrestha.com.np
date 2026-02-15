<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain");

// Google Sheets CSV URL
$csv_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMAlrtOL0U2WoM5iDr9DhxpB0s7Khb_oKc2TsBIjkW3gdmG-MoQnuXPwTonum8NNwpOcGntBbwWnpZ/pub?gid=1769485623&single=true&output=csv";

// Fetch CSV content and output
echo file_get_contents($csv_url);
