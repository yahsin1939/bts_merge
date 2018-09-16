$(document).ready(function() {
    $("input").click(function()
    {
        var numberofListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberofListItem);
        console.log(randomChildNumber);
        $("H1").text($("li").eq(randomChildNumber).text());
    });
    $("ol").hide()
  
});