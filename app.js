$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))


$(document).ready(function () {

    $(".saveBtn").on("click", function() {

        var taskText = $(this).siblings(".textarea").val();
        var taskHour = $(this).siblings(".textarea").attr("id");
        
        localStorage.setItem(taskText, taskHour);
       

    })


    $("#hour-9 .textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10 .textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 .textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 .textarea").val(localStorage.getItem("hour-12"));
    $("#hour-1 .textarea").val(localStorage.getItem("hour-1"));
    $("#hour-2 .textarea").val(localStorage.getItem("hour-2"));
    $("#hour-3 .textarea").val(localStorage.getItem("hour-3"));
    $("#hour-4 .textarea").val(localStorage.getItem("hour-4"));
    $("#hour-5 .textarea").val(localStorage.getItem("hour-5"));
    $("#hour-6 .textarea").val(localStorage.getItem("hour-6"));
    $("#hour-7 .textarea").val(localStorage.getItem("hour-7"));

    var currentHour = moment().hour();
    
    function currentTime() {

      

        $(".time-block").each(function () {
            var blockTime = $(this).attr("id");
            var blockHour = parseInt(blockTime)
            // console.log(blockTime, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
               
                
            }
            else if (blockHour === currentHour) {
                $(this).addClass("present");
            
                

            }
            else {
                $(this).addClass("future");
             
                

            }


        })

    }
 

    currentTime();
    renderStoredInputs()


})




