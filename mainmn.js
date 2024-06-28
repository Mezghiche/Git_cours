function generatyears(star,end) {
     "use strict"
	 var years
	 document.write("<select>")
	  for (years = star; years <= end; years + 1) {
		  document.write("<option>" + years + "</option>")
	  }
	  document.write("</select>")
		  
	  }
	  generatyears(1900,2024)