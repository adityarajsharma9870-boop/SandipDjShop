<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$location = $_POST['location'];

$to = "awikparbat57@gmail.com";

$subject = "New DJ Booking";

$message = "
Name : $name
Phone : $phone
Location : $location
";

mail($to,$subject,$message);

echo "Booking Submitted Successfully";

?>