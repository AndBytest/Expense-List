function addExpense(){
  var getdate = document.getElementById("date");
   var date = getdate.value;
  var getdescription = document.getElementById("description");
  var description = getdescription.value;
   var getamount = document.getElementById("amount");
  var amount = getamount.value;
  
  var table = document.getElementById("table");
    
  var hilera = document.createElement("tr");
  
  var celda1 = document.createElement("td");
  var texto1 = document.createTextNode(date);
    celda1.appendChild(texto1);
  
  var celda2 = document.createElement("td");
    var texto2 = document.createTextNode(description);
      celda2.appendChild(texto2);

  var celda3 = document.createElement("td");
      var texto3 = document.createTextNode(amount);
      celda3.appendChild(texto3);
  
      hilera.appendChild(celda1);
      hilera.appendChild(celda2);
      hilera.appendChild(celda3);
    
     
      
      return table.appendChild(hilera);

}