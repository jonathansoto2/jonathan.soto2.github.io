function addSale(){
    var date = new Date();
    let currentDate = date.getMonth().toString()+ "/" +  date.getDay().toString() + "/"+ date.getFullYear().toString();
    var saleAmount = document.getElementById("sale-amount").value;
    var btn = document.createElement("input");
    btn.type = "button";
    btn.className = "btn";
    btn.value = "DEL";
    


    if(isNaN(saleAmount) == false){

        
        var table = document.getElementById("sales-table");
        var createNewRow = table.insertRow();
        var buttonCell = createNewRow.insertCell(0);
        var saleCell = createNewRow.insertCell(1);
        var CommCell = createNewRow.insertCell(2);
        var dateCell = createNewRow.insertCell(3);

        var calculateComm = (parseInt(saleAmount) * 0.20).toFixed(2);




        buttonCell.appendChild(btn);
        saleCell.innerHTML = saleAmount + "$";
        CommCell.innerHTML =  calculateComm.toString() + "$";
        dateCell.innerHTML = currentDate;
        btn.onclick = function removeSale(){
            //var table = document.getElementById("sales-table");
           // table.deleteRow();
            var td = btn.parentNode; 
            var tr = td.parentNode; // the row to be removed
            tr.parentNode.removeChild(tr);
    };
    }
    else{
        window.alert("that is an invaild sale amount");
    }


};

