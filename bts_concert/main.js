$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>Date</th><th>Country</th><th>Place</th></tr>");   
    var DateCount =Date.length;
    for(var x=0;x<DateCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+Date[x]+"</td>");
        $("#courseTable").append("<td>"+Country[x]+"</td>");
        $("#courseTable").append("<td>"+Place[x]+"</td>");
        $("#courseTable").append("<tr>");
    }
});