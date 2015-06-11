$(function(){
	$("#upload").click(function(){
		$("form").fadeIn();
	});

	$("#annuler").click(function(){
		$("form").fadeOut();
	})

	/* set up XMLHttpRequest */
	var url = "files/last.xls?date="+(new Date().getTime()),
		oReq = new XMLHttpRequest();

	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function(e) {
		var arraybuffer = oReq.response,
			data = new Uint8Array(arraybuffer),
		  	arr = new Array(),
		  	i, bstr, workbook;

	  	for(i = 0; i != data.length; ++i){
			arr[i] = String.fromCharCode(data[i]);
		} 

		bstr = arr.join("");

	  /* Call XLSX */
		workbook = XLSX.read(bstr, {type:"binary"});

	 	bds.content = XLSX.utils.sheet_to_json(workbook.Sheets["Feuille1"]);

	 	$("#content").html("BDs téléchargées");
	}

	oReq.send();
});