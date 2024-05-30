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

}?>



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
    <h1>Supprimer la recette? </h1>

<form action="submit_delete.php" method="post">
<div class="mb-3 visually-hidden">
        <label for="id" class="form-label">Id de la recette  </label>
        <input type="text" class="form-control" id="id" name="id" aria-describedby="email-help" value="<?php echo $id;  ?>">
    </div>
    <button type="submit" class="btn btn-danger">La suppression est définitive</button>
</form>
</div>
    

    <?php require_once(__DIR__.'/footer.php'); ?>

    
</body>
</html>