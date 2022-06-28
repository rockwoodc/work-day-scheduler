// add current date at the top of the screen
document.getElementById("currentDay").innerHTML = moment().format('LL');

var timeColor = function() {
    // get current hour
    var hour = parseInt(moment().format('H'));

    $(".time-block").each(function(){
        var dataHour = parseInt($(this).attr("id"));
        //if the current hour is after this time, make it grey
        if (dataHour < hour) {
            $(this).addClass("past");
        //if the current hour is equal to this time, make it red
        }else if (dataHour === hour) {
            //remove the previous classes
            $(this).removeClass("past");
            $(this).addClass("present");
        //if the current hour is before this time, make it green
        }else {
            //remove the previous classes
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
   };

//save button
$('.saveBtn').click(function(){
    //pulls the id from the code above
    var hour = $(this).parent().attr("id");
    //pulls the description of the task associated with the id/row
    var task = $(this).siblings(".description").val();

    //save the whole time block/description to local storage
    localStorage.setItem(hour, task);
});

//pulls hour and tasks from local storage after refresh
$("#9 .description").val(localStorage.getItem(9));
$("#10 .description").val(localStorage.getItem(10));
$("#11 .description").val(localStorage.getItem(11));
$("#12 .description").val(localStorage.getItem(12));
$("#13 .description").val(localStorage.getItem(13));
$("#14 .description").val(localStorage.getItem(14));
$("#15 .description").val(localStorage.getItem(15));
$("#16 .description").val(localStorage.getItem(16));
$("#17 .description").val(localStorage.getItem(17));


timeColor();

//update task colors every 10 minutes
setInterval(function() {
    timeColor();
}
, 600000)