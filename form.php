<?php
  $to = "orunbaevr848@gmail.com";
  $tema = "topchik";
  $body = array();
  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $body[] = array(
      "id" => $row['title', 'input'],
    );
  };

  $headers  = 'MIME-Version: 1.0' . "\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\n";
  $headers .= 'From: '.$recipient_email.''."\n";

  $subject = "Subject";
  $recipient = $to;
  $content = implode("\n", $body);
  mail($recipient, $subject, $content, $headers);
?>