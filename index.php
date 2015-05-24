<?php
	$target_dir = "./files/";
	$target_file = $target_dir . "bdm_" . date("Y_m_d_H.i.s").".xls";

	if(isset($_POST["submit"])) {
	    if (move_uploaded_file($_FILES["excel"]["tmp_name"], $target_file)) {
	    	copy($target_file, $target_dir . "last.xls");
	        echo "Le fichier a été correctement uploadé";
	    } else {
	        echo "Il y a eu un problème lors de l'upload...";
	    }
	}


?>

<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<script type="text/javascript" src="libs/jquery.min.js"></script>
	<script type="text/javascript" src="libs/xlsx.core.min.js"></script>

	<script type="text/javascript" src="script/search.js"></script>
	<script type="text/javascript" src="script/import.js"></script>

	<link rel="stylesheet" type="text/css" href="css/item.css">
</head>
<body>
	<header>
		<input type="text" id="search-terms" placeholder="Recherche"/>
		<img id="search-button" src="assets/search.svg"/>
		<img id="upload" src="assets/upload.svg"/>
	</header>
	<form method="POST" enctype="multipart/form-data">
		<div>
			<input type="file" id="excel" name="excel"/>
			<div>
				<span id="annuler" class="button">Annuler</span>
				<input class="button" type="submit" value="Valider" name="submit">
			</div>
		</div>
	</form>
	<div id="content">
		Téléchargement des BDs en cours...
	</div>
</body>
</html>