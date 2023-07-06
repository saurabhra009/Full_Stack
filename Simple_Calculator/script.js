function updateRate() 
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var noy = document.getElementById("years").value;
    if(p<=0)
    {
        window.alert("Enter positive number");
        document.getElementById("principal").focus();
    }
    else{
    var i = p*r*noy;
    var i_final= i/100;
    var amount = i_final+p;
    document.getElementById("result").innerText=amount;
    }

    
}
        