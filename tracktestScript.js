    (function() {
        var html_tracktext = document.querySelectorAll("#table_user_results tbody tr");

        html_tracktext.forEach(function(actual){

            results = actual.querySelectorAll(".TT_toolTip")
            cant = results.length
            last_result = results[cant - 1]

            if(last_result){
                last_result_id = last_result.querySelector("a").href.split("testid=").pop()

                setTimeout(function(){ 
                    window.open("https://app.tracktest.eu/en/index.php?page=showTestResultPDF&dir=tests&testid="+last_result_id, "_blank");
                }, 1000);  
                
            }
        })    
    })();