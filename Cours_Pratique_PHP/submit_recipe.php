<?php
session_start(); 
require_once(__DIR__.'/isConnect.php'); 
include_once(__DIR__.'/config/mysql.php'); 
include_once(__DIR__.'/variables.php'); 

$post = $_POST; 

if(!isset($post['titre']) || !isset($post['recette'])){
if( ($post['recette']) 
   || trim($post['recette']) == '' 
   || empty($post['titre']) 
   || trim($post['titre']) == '' )
   {
        echo 'les informations transmises ne sont pas valides';
        return; 
   }
   echo 'Il faut un titre et une recette pour soumettre le formulaire'; 
   return ; 
}

$title =$post['titre']; 
$recipe = $post['recette'];

//faire l'insertion
$insert_recipe = $mysqlClient->prepare('INSERT INTO recipes(title, recipe, author, is_enabled) VALUES(:title, :recipe, :author, :is_enabled)' );
$insert_recipe->execute([
    'title' => $title,
    'recipe' => $recipe, 
    'is_enabled' => 1, 
    'author' => $_SESSION['LOGGED_USER']['email'],
     ]); 

   ?>
   <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Recettes - Contact reçu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">

        <?php require_once(__DIR__ . '/header.php'); ?>
        <h1>Recette bien reçu !</h1>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Rappel de vos informations</h5>
                <p class="card-text"><b>Titre</b> : <?php echo(strip_tags($post['titre'])); ?></p>
                <p class="card-text"><b>Recette</b> : <?php echo(strip_tags($post['recette'])); ?></p>
            </div>
        </div>
    </div>
</body>
</html>