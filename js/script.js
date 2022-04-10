var schedule [
    {

   id = "0",
   hour = "8",
   time ="8",
   plans =""
},
{

    id = "1",
    hour = "9",
    time ="9",
    plans =""
 },
 {

    id = "2",
    hour = "10",
    time ="10",
    plans =""
 },
 {

    id = "3",
    hour = "11",
    time ="11",
    plans =""
 },
 {

    id = "4",
    hour = "12",
    time ="12",
    plans =""
 },
 {

    id = "5",
    hour = "13",
    time ="13",
    plans =""
 },
 {

    id = "6",
    hour = "14",
    time ="14",
    plans =""
 },
 {

    id = "7",
    hour = "15",
    time ="15",
    plans =""
 },
 {

    id = "8",
    hour = "16",
    time ="16",
    plans =""
 }, 
 {

    id = "9",
    hour = "17",
    time ="17",
    plans =""
 },

 {

    id = "10",
    hour = "18",
    time ="18",
    plans =""
 },
]
// gets data for the header date
function Date() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}
