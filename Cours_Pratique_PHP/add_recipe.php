<?php
session_start();

require_once(__DIR__ . '/variables.php');
require_once(__DIR__ . '/functions.php');
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add_recipe</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
    >
</head>
<body  class="d-flex flex-column min-vh-100">
   
    <div class="container">
    <?php require_once(__DIR__.'/header.php'); ?>
<h1>Ajoutez une recette</h1>
<form action="submit_recipe.php" method="POST" enctype="multipart/form-data">
    <div class="mb-3">
        <label for="titre" class="form-label">Titre de la recette</label>
        <input type="text" class="form-control" id="titre" name="titre" aria-describedby="email-help">
        <div id="email-help" class="form-text">Choisissez un titre percutant!</div>
    </div>
    <div class="mb-3">
        <label for="recette" class="form-label">Description de la recette</label>
        <textarea class="form-control" placeholder="Seulement du contenu vous appartenant ou libre de droit" id="recette" name="recette"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
</div>
    

    <?php require_once(__DIR__.'/footer.php'); ?>

    
</body>
</html>