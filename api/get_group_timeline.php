<?php

error_reporting  (E_ALL);
ini_set ('display_errors', true);
header("Content-Type: application/json; charset=UTF-8");

// Load the app's OAuth tokens into memory
require 'app_tokens.php';

// Load the tmhOAuth library
require 'tmhOAuth.php';

// Create an OAuth connection to the Twitter API
$connection = new tmhOAuth(array(
  'consumer_key'    => $consumer_key,
  'consumer_secret' => $consumer_secret,
  'user_token'      => $user_token,
  'user_secret'     => $user_secret
));

// Send a tweet
$code = $connection->request('GET', 
  $connection->url('1.1/lists/statuses'), 
  array('list_id' => $_REQUEST['group_id']));

// A response code of 200 is a success
if ($code == 200) {
  $resultArr = array();
  $i = 0;
  $resArr = json_decode($connection->response['response'], true);
  foreach ($resArr as $res) {
    $resultArr[$i] = array(
      "iconPath"  => $res["user"]["profile_image_url"],
      "userName"  => $res["user"]["name"],
      "userID"    => $res["user"]["screen_name"],
      "text"      => $res["text"], 
      "time"      => $res["created_at"],
      "twitID"    => $res["id"]
    );
    $i++;
  }
  print json_encode($resultArr);
  //print_r(json_decode($connection->response['response'], true));
}
else {
  print "Error: $code";
}

?>