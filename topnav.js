document.write("<nav>");
document.write("	<!-- Top Navigation Menu -->");
document.write("	<div class=\"top_nav\">");
document.write("		<ul>");
document.write("			<li class=\"top_nav\"  style=\"width:58vw;\"><a href=\".\/index.html\" style=\"text-align:left;\">Home<\/a><\/li>");
document.write(" 			<li class=\"top_nav\"><a href=\".\/projects.html\">Projects<\/a><\/li>");
document.write(" 	 		<li class=\"top_nav\"><a href=\".\/projects_TOC.html\">TOC<\/a><\/li>");
document.write(" 			<li class=\"top_nav\"><a href=\".\/cv.html\">CV<\/a><\/li>");
document.write(" 	 		<li class=\"top_nav\"><a href=\".\/contact.html\">Contact<\/a><\/li>");
document.write("		<\/ul>");
document.write("	<\/div>");
document.write("		");
document.write("	<div class=\"top_small_nav\">");
document.write("  		  	");
document.write("  		<div class=\"burger_icon\" onclick=\"myFunction()\">  		");
document.write("  			<div class=\"bar1\"><\/div>");
document.write(" 		 	<div class=\"bar2\"><\/div>");
document.write("  			<div class=\"bar3\"><\/div>  			");
document.write("		<\/div>");
document.write("  		");
document.write("  		<!-- Navigation links (hidden by default) -->");
document.write("  		<div id=\"myLinks\">");
document.write("   			<a href=\".\/index.html\" style=\"text-align:left;\">Home<\/a>");
document.write("   			<a href=\".\/projects.html\">Projects<\/a>");
document.write("   			<a href=\".\/projects_TOC.html\">TOC<\/a>");
document.write("   			<a href=\".\/cv.html\">CV<\/a>");
document.write("   			<a href=\".\/contact.html\">Contact<\/a>");
document.write(" 	   <\/div>");
document.write("  	   ");
document.write("	<\/div>");
document.write(" 	");
document.write(" 	");
document.write("<\/nav>");
document.write("");
document.write("");
document.write("");
document.write("<script>");
document.write("\/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu \/ bar icon *\/");
document.write("function myFunction() {");
document.write("  var x = document.getElementById(\"myLinks\");");
document.write("  if (x.style.display === \"block\") {");
document.write("    x.style.display = \"none\";");
document.write("  } else {");
document.write("    x.style.display = \"block\";");
document.write("  }");
document.write("}");
document.write("<\/script>");