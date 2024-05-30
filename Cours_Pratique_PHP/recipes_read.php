<?php
session_start();

require_once(__DIR__ . '/variables.php');
require_once(__DIR__ . '/functions.php');

$id = $_GET['id']; 
foreach($recipes as $recipe){
    if ($recipe['recipe_id'] == $id){
            $title= $recipe['title'];
            $contenu = $recipe['recipe'] ;
            break; 

    }; 


}

 


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> recipe read</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
    >
</head>
<body  class="d-flex flex-column min-vh-100">
   
    <div class="container">
    <?php require_once(__DIR__.'/header.php'); ?>
    <?php echo "<h1>Détail de la recette ${title}</h1>" ?>

   <?php echo "<p>".$contenu."</p>"; ?>
   

</div>
    

    <?php require_once(__DIR__.'/footer.php'); ?>

    
</body>
</html>