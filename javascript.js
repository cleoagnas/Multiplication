function dothis() {
	var rowp = document.getElementById("rowput").value;
	var columnp = document.getElementById("colput").value;
	console.log(rowp,columnp);
	document.write("<table border='1px'>");
	var row = rowp;
	var column = columnp;

	for(var indexrow = 1; indexrow <= row; indexrow++) {

		document.write("<tr style='height:30px;  align-self: center;'>");

		for(var indexcolumn = 1; indexcolumn <= column; indexcolumn++) {

			if(indexcolumn == indexcolumn || indexrow == indexrow) {
				color_td = "orange";
			}
			else {
				color_td = "green";
			}

			document.write("<td style='width:30px;background-color:orange;"  + color_td + "'>" + indexrow*indexcolumn + "</td>");
		}
		document.write("</tr>");
	}

	document.write("</table>");


	}
