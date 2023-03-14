exports.outputResult = function (r) {
    var a = "<h1>This is result from database</h1><br>"
    
    for (var i = 0; i < r.length; i++){
        a += "No: <strong>" + JSON.stringify(r[i]['No']) + "</strong>,";      
        a += "Name: <strong>" + JSON.stringify(r[i]['name']) + "</strong>, ";      
        a += "Position: <strong>" + JSON.stringify(r[i]['position']) + "</strong>, ";  
        a += "Club: <strong>" + JSON.stringify(r[i]['club']) + "</strong>, ";  
        a += "Country: <strong>" + JSON.stringify(r[i]['country']) + "</strong>, ";      
        a += "Age: <strong>" + JSON.stringify(r[i]['age']) + "</strong>, ";    
        a += "Birth Place: <strong>" + JSON.stringify(r[i]['birthplace']) + "</strong>";  
        a += "<br>"
    }
    return "" + a;
};