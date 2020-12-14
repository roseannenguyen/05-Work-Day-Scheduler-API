

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))


$(document).ready(function () {


    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var taskText = $(this).prev(".textarea").val().trim();
        var taskHour = $(this).prev().attr("id");

        // console.log(document.querySelectorAll (".textarea"))

        localStorage.setItem(taskText, taskHour)

 


        // savedData = JSON.parse(localStorage.getItem(taskText))




        // saveText();
        // storedData();

    })

    // function saveText() {
    //     var storedText = JSON.parse(localStorage.getItem("taskText"))

    //     if (storedText !== null) {
    //         taskText = storedText;
    //     }
    // }

    // function storedData() {
    //     localStorage.setItem("taskText", JSON.stringify(taskText));
    // }





    function currentTime() {

        var currentHour = moment().hour();

        $(".time-block").each(function () {

            var blockTime = parseInt($(this).attr("id").split("-")[1]);


            if (blockTime < currentHour) {
                $(this).find("textarea").addClass("past");


            }
            else if (blockTime === currentHour) {
                $(this).find("textarea").addClass("present");



            }
            else {
                $(this).find("textarea").addClass("future");



            }
        })
    }

    currentTime();

})




