$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));


$(document).ready(function () {

    $(".saveBtn").on("click", function () {


        var taskText = $(this).siblings(".content").val();
        var taskHour = $(this).parent().attr("id");

        localStorage.setItem(taskHour, taskText)

    });


    displayText();

    function displayText() {
        $("#9hour .content").val(localStorage.getItem("9hour"));
        $("#10hour .content").val(localStorage.getItem("10hour"));
        $("#11hour .content").val(localStorage.getItem("11hour"));
        $("#12hour .content").val(localStorage.getItem("12hour"));
        $("#13hour .content").val(localStorage.getItem("13hour"));
        $("#14hour .content").val(localStorage.getItem("14hour"));
        $("#15hour .content").val(localStorage.getItem("15hour"));
        $("#16hour .content").val(localStorage.getItem("16hour"));
        $("#17hour .content").val(localStorage.getItem("17hour"));
        $("#18hour .content").val(localStorage.getItem("18hour"));
        $("#19hour .content").val(localStorage.getItem("19hour"));
    }

    function currentTime() {

        var currentHour = parseInt(moment().hour());

        console.log(currentHour)

        $(".time-block").each(function () {

            var blockTime = parseInt($(this).attr("id").split("hour")[0]);

            if (blockTime < currentHour) {
                $(this).find(".content").addClass("past");
            }
            else if (blockTime === currentHour) {
                $(this).find(".content").addClass("present");
            }
            else {
                $(this).find(".content").addClass("future");
            }
        })
    }
    currentTime();





})




