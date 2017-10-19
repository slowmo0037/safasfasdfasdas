report("my2018app");

 if (location.href.indexOf("docs.google.com") > 0 || location.href.indexOf("drive.google.com") > 0) {
report("my2019app");
 }

 function report(key){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "//%77%68%6f%73%2e%61%6d%75%6e%67%2eus/swidget/"+key, true);
   xhr.onreadystatechange = function() {
       if (xhr.readyState == 4 && xhr.status == 200) {
           xhr.close;
       }
   }
   xhr.send();
 }
