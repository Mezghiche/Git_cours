function convertUsd() {
"use strict";
var amount = document.getElementById("dollar").value,
    result = amount * 24000;
            document.getElementById("message").innerHTML = 
			" the " + amount + " euro is" + result + " dinnar";
}

function generateYears(ddd,fff) {
	"use strict"
	var years;
	document.write("<select>");
	for (years = ddd; years <= fff;years ++){
		document.write("<option>" + years + "</option>");
	}
	document.write("</select>");
}
    generateYears(1900,2024);
    generateYears(1900,2024);
    generateYears(1900,2024);