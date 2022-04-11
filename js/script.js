// info for time set on scheduler
var schedule = [
   {
      hour:7,
      time:"7 am",
   },
   {
      hour:8,
      time:"8 am",
   },
   {
      hour:9,
      time:"9 am",
   },
   {
      hour:10,
      time:"10 am",
   },
   {
      hour:11,
      time:"11 am",
   },
   {
      hour:12,
      time:"12 pm",
   },
   {
      hour:13,
      time:"1 pm",
   },
   {
      hour:14,
      time:"2 pm",
   },
   {
      hour:15,
      time:"3 pm",
   },
   {
      hour:16,
      time:"4 pm",
   },
   {
      hour:17,
      time:"5 pm",
   }, 
   {
      hour:18,
      time:"6 pm",
   }, 
   {
      hour:19 ,
      time:"7 pm",
   },  
]

//schedule fuction
schedule.forEach(function(hourObj){

//colors change to determine time of the day in relation to schedule
   var color = ""
   if (hourObj.hour < moment().hours()){
      color = "past"
   }

   else if (hourObj.hour == moment().hours()){
      color = "present"
   }
   else {color = "future"}
   
    var rowDiv = $("<div>").addClass("row time-block " + color).attr("id", hourObj.hour);
   
    var hourDiv = $("<div>").addClass("col-2 hour").attr("id", "time").text(hourObj.time)
   
    var textDiv = $("<textarea>").addClass("col-8 description").val(localStorage.getItem(hourObj.hour))

   
    var saveBtn = $("<button>").addClass("col-2 saveBtn").attr("id", hourObj.hour).text("save")
   
    //adds the hour, text, and save button to the row div for the container
   $(".container").append(rowDiv.append(hourDiv,textDiv,saveBtn))
   })

// save button function once button clicked
   $(".saveBtn").on("click", function(){
  
      var hourKey = $(this).attr("id")
   
      var activity = $(this).siblings(".description").val()

//local storage
      localStorage.setItem(hourKey, activity)
      console.log(localStorage)
   
   
   })
      
// gets data for the header date

function getHeaderDate() {
   var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();

