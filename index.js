// varrables
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

const displayHr =document.querySelector(".DisplayHour")
const displayMin =document.querySelector(".DisplayMinute")
const displaySec =document.querySelector(".DisplaySecond")

var thisDate = document.querySelector(".date")
var thisDay = document.querySelector(".day")
var day = new Date()

// functions
function monthName(){
    switch (day.getUTCMonth()) {
        case 0:
            return "January"
            break;
        case 1:
            return "Febuary"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 7:
            return "August"
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December"
            break;
    }
}

function displayDate() {
    thisDate.innerHTML = `${ day.getUTCDate() }, ${ monthName() } ${ day.getUTCFullYear() }`
}

function displayDay() {
    switch (day.getDay()) {
        case 0:
            thisDay.innerHTML = "Sunday"
            break;
        case 1:
            thisDay.innerHTML = "Monday"
            break;
        case 2:
            thisDay.innerHTML = "Tuesday"
            break;
        case 3:
            thisDay.innerHTML = "Wednesday"
            break;
        case 4:
            thisDay.innerHTML = "Thursday"
            break;
        case 5:
            thisDay.innerHTML = "Friday"
            break;
        case 6:
            thisDay.innerHTML = "Saturday"
            break;
    }
}

function displayTime() {
    setInterval(()=>{
        let today = new Date()
        let currentHour = today.getHours()
        let currentMinute = today.getMinutes()
        let currentSecond = today.getSeconds() 
    
        let hh = currentHour * 30
        let mm = currentMinute * 6
        let ss = currentSecond * 6
    
        hr.style.transform = `rotateZ(${ (hh) + (mm / 12) }deg)`
        mn.style.transform = `rotateZ(${(mm)}deg)`
        sc.style.transform = `rotateZ(${(ss)}deg)`
    
        displayHr.innerHTML = `${currentHour}`
        displayMin.innerHTML = `${currentMinute}`
        displaySec.innerHTML = `${currentSecond}`
    })
}

// execution
displayTime()
displayDate()
displayDay()