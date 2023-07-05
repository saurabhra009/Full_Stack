function convert_to_fahrenheit(){
    var cel = document.getElementById("c").value;
    var f = cel*1.8;
    var far = f+32;
    document.getElementById("f").value=far;
}

function convert_to_pounds(){
    var kilo = document.getElementById("kg").value;
    var pound = kilo*2.205;
    document.getElementById("p").value=pound;
}

function convert_to_miles(){
    var km = document.getElementById("k").value;
    var mil = km/1.609;
    document.getElementById("m").value=mil;
}