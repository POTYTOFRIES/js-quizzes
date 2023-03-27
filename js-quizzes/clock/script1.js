const yearTime = new Date()

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let monthNow = month[yearTime.getMonth()]

let date = yearTime.getDate()

let time = yearTime.toLocaleString([],{hour: "2-digit",minute: "2-digit", second: "numeric"})

let day;
switch (yearTime.getDay()) {
    case 0:
        day = "Sunday";
        break
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
    

let show = `<span>${monthNow} ${date}</span><br>${time}`   
document.getElementById("timeDisplay").innerHTML = show
document.getElementById("days").innerHTML = day
