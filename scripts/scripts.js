let dataLoaded = false;

$("button").click(function(){
    if (!dataLoaded) {
        $.getJSON("https://barrycumbie.github.io/barrycumbie/data.json", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " <br><br>");
            });
            dataLoaded = true; //set the flag to prevent more than 1 append
        });
    }
    });