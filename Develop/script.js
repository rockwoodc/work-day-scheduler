// add current date at the top of the screen
document.getElementById("currentDay").innerHTML = moment().format('LL');

//color code the tasks to visually show upcoming due dates
var timeColor = function() {
    // get current hour by converting my string ID to integer
    var hour = parseInt(moment().format('HH'));
    
    // apply new class if task is in the present/past/future
    if (moment().isAfter(hour)) {
      $(descriptionEl).addClass("time-block-item-danger");
    }
    else if (Math.abs(moment().diff(hour, "hour")) <= 1) {
      $(descriptionEl).addClass("description-item-warning");
    }
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
$("#1 .description").val(localStorage.getItem(1));
$("#2 .description").val(localStorage.getItem(2));
$("#3 .description").val(localStorage.getItem(3));
$("#4 .description").val(localStorage.getItem(4));
$("#5 .description").val(localStorage.getItem(5));


timeColor();

//update task colors every 10 minutes
setInterval(function() {
    timeColor();
}
, 600000)