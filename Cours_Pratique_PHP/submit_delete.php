<?php
session_start(); 
require_once(__DIR__.'/isConnect.php'); 
include_once(__DIR__.'/config/mysql.php'); 
include_once(__DIR__.'/variables.php'); 
include_once(__DIR__.'/functions.php'); 

$post = $_POST; 



$id = $post['id']; 

//faire la suppression
$insert_recipe = $mysqlClient->prepare('DELETE FROM recipes WHERE recipe_id=:id');
$insert_recipe->execute([
    'id' => $id,
     ]); 

     redirectToUrl('index.php'); 
   ?>