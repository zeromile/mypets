var products = document.getElementById("products");
products.addEventListener("click", btnFunc);

function btnFunc(e)  {
   console.log(e.target.className);
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var myResponse = JSON.parse(this.responseText);
        document.getElementById("productname").innerHTML = myResponse.productname;
        document.getElementById("image").src = "/images/" + myResponse.image;
        document.getElementById("info").innerHTML = myResponse.info;

     }
   };
   if (e.target.className == 'product'){
     xhttp.open("GET", "http://localhost:3000/" + e.target.id, true);
     xhttp.send();
     }
   }
