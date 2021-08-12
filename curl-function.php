<?php
// Initiate curl session in a variable (resource)
$curl_handle = curl_init();

$word = $_POST['word'];
$url = $_POST['api_url'].$word;

// Set the curl URL option
curl_setopt($curl_handle, CURLOPT_URL, $url);

// This option will return data as a string instead of direct output
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);

// Execute curl & store data in a variable
$curl_data = curl_exec($curl_handle);

curl_close($curl_handle);

// Decode JSON into PHP array
$response_data = json_decode($curl_data);

echo $curl_data;
// Print all data if needed
// print_r($response_data);
// die();
