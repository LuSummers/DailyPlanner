var schedule = [
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
      hour:17 ,
      time:"5 pm",
   }, 
   {
      hour:18 ,
      time:"6 pm",
   }, 
   {
      hour:19 ,
      time:"7 pm",
   },  {
      hour:20 ,
      time:"8 pm",
   }, 
]
schedule.forEach(function(hourobj){
   var color = ""
   
    var rowDiv = $("<div>").addClass("row time-block " + color).attr("id", hourobj.hour);
   
    var hourDiv = $("<div>").addClass("col-2 hour").attr("id", "time").text(hourobj.time)
   
    var textDiv = $("<textarea>").addClass("col-8 description")
   
    var saveBtn = $("<button>").addClass("col-2 saveBtn").attr("id", hourobj.hour).text("save")
   
   $(".container").append(rowDiv.append(hourDiv,textDiv,saveBtn))
   })
   $(".saveBtn").on("click", function(){
  
      var hourKey = $(this).attr("id")
   
      var activity = $(this).siblings(".description").val()
   
   })
      
// gets data for the header date

function getHeaderDate() {
   var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();

