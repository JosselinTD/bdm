var bds = {content:[]};

$(function(){
	$("#search-button").on("click", function(){
		var search = $("#search-terms").val().toLowerCase(),
			results = [], 
			table = $("<table></table>"),
			content = $("#content");

		$("#content").empty();

		$("body").scrollTop(0);

		bds.content.forEach(function(bd){
			var div = $("<div class='item'></div>");
			for(key in bd) {
				if(bd.hasOwnProperty(key) && typeof bd[key] === "string" && bd[key].toLowerCase().indexOf(search) != -1) {
					div.append(
						"<header>"+
							"<span class='numero'>"+(bd["numero"] || "?")+"</span>"+
							"<span class='desc'>"+
								"<h1>"+(bd["titre"] || "?")+"</h1>"+
								"<h2>"+(bd["serie"] || "?")+"</h2>"+
							"</span>"+
						"</header>"
					);
					div.append(
						"<div class='detail'>"+
							"<div class='auteur'>Auteur : "+(bd["auteur"] || "?")+"</div>"+
							"<div class='auteur'>Année DL : "+(bd["anneedl"] || "?")+"</div>"+
							"<div class='auteur'>Année EO : "+(bd["anneeeo"] || "?")+"</div>"+
							"<div class='auteur'>Cote : "+(bd["cote"] || "?")+"</div>"+
							"<div class='auteur'>Edition : "+(bd["edition"] || "?")+"</div>"+
						"</div>"
					);

					if(bd["anneeeo"] && bd["anneeeo"].indexOf("eo") !== -1){
						div.addClass("eo");
					}

					div.on("click", function(){
						div.toggleClass("on");
					});

					content.append(div);
					return;
				}
			}
		});
	});
});