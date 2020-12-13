var keys = [];

for (var i = 9; i < 18; i++) {
keys.push(`${i}-input`)
}

$(document).ready(function writeTask(taskHour, taskText) {
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))


    $(".saveBtn").on("click", function(event) {

        var taskText = $(this).prev().val()
        var taskHour = $(this).prev().attr("id") 
    
        writeTask(taskHour, taskText)
    
        localStorage.setItem(taskText, taskHour);
    
    })

})



function readTasks() {
    var tasks = []
    for (i =0; i < keys.length;i++) {
        var task = localStorage.getItem(keys[i])
        tasks.push(task)
    }
    return tasks

}

function fillTasks(tasks) {
    for (var i=0; i < tasks.length; i++) {
        var el = keys[i]
        var text = tasks[i]
        // write it to DOM
        
    }
}

function currentTime() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this),attr("id").split("hour")[1]);
        console.log(blockTime, currentHour)

        if (blockTime < currentHour) {
            $(this).addClass("past")
            $(this).removeClass("future")
            $(this).removeClass("present")
        }
        else if (blockTime === currentHour) {
            $(this).addClass("present")
            $(this).remoevClass("future")
            $(this).removeClass("past")
        }
        else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }


    })
    currentTime();
}


var tasks = readTasks();
fillTasks(tasks)

