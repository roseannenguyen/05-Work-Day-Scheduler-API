$(document).ready(function () {

    var keys = [];
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));


    $(".saveBtn").on("click", function () {
        

        var taskText = $(this).prev(".textarea").val().trim();
        var taskHour = $(this).prev().attr("id");

        var savedDate = moment().format("dddd, MMMM Do");
        keys.push({textarea: taskText, time: taskHour, date: savedDate});
        localStorage.setItem("keys", JSON.stringify(keys));

    });

    function currentTime() {

        var currentHour = moment().hour();

        $(".time-block").each(function () {

            var blockTime = this.id


            if (blockTime < currentHour) {
                $(this).find(".textarea").addClass("past");


            }
            else if (blockTime === currentHour) {
                $(this).find(".textarea").removeClass("past");
                $(this).find(".textarea").addClass("present");



            }
            else {
                $(this).find(".textarea").addClass("future");
                $(this).find(".textarea").removeClass("past");
                $(this).find(".textarea").removeClass("present");
                



            }
        })
    }

    currentTime();

    var storedData = JSON.parse(localStorage.getItem("keys"));

    if (storedData !== null) {
      keys = storedData;
    }
  
    for(var i = 0; i < keys.length; i++) {
      var userInput = keys[i].textarea;
      $("#" + keys[i].taskHour).children("textarea").text(userInput);
    }

})




