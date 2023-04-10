var timeChooseTable = document.querySelector("div.timeTable");
var timePickSureButton = document.querySelector(".timePickSure");
var locationChooseTable = document.querySelector("div.locationTable");
var peopleChooseTable = document.querySelector("div.peopleTable");

function timeChoose() {
    timeChooseTable.style.display = "block";
    if (typeof locationChooseTable.style !== 'undefined') locationChooseTable.style.display = "none"
    if (typeof peopleChooseTable.style !== 'undefined') peopleChooseTable.style.display = "none"
}
function locationChoose() {
    locationChooseTable.style.display = "block";
    if (typeof timeChooseTable.style !== 'undefined') timeChooseTable.style.display = "none"
    if (typeof peopleChooseTable.style !== 'undefined') peopleChooseTable.style.display = "none"
}
function peopleChoose() {
    peopleChooseTable.style.display = "block";
    if (typeof timeChooseTable.style !== 'undefined') timeChooseTable.style.display = "none"
    if (typeof locationChooseTable.style !== 'undefined') locationChooseTable.style.display = "none"
}

window.addEventListener("click", function (event) {
    if (event.target.classList.contains('main') || event.target.classList.contains('chooseForm') || event.target.classList.contains('datepicker')) {
        if (typeof timeChooseTable.style !== 'undefined') timeChooseTable.style.display = "none"
        if (typeof locationChooseTable.style !== 'undefined') locationChooseTable.style.display = "none"
        if (typeof peopleChooseTable.style !== 'undefined') peopleChooseTable.style.display = "none"
    }
    if (event.target.classList.contains('timePickSure')) {
        if (typeof timeChooseTable.style !== 'undefined') timeChooseTable.style.display = "none"
        timePickSureButton.style.display = "none";
    }
    if (event.target.classList.contains('locationOptions')) {
        if (typeof locationChooseTable.style !== 'undefined') locationChooseTable.style.display = "none"
    }
    if (event.target.classList.contains('peopleOptions')) {
        if (typeof peopleChooseTable.style !== 'undefined') peopleChooseTable.style.display = "none"
    }
})


var timeChoices = document.querySelectorAll(".timeOptions");
var statusTime = 0;
function chooseTimePeriod(obj) {
    console.log(obj.innerHTML);
    console.log(Array.from(timeChoices).find((node) => node === obj));
    console.log(Array.from(timeChoices).indexOf.call(timeChoices, obj));
    objIndex = Array.from(timeChoices).indexOf.call(timeChoices, obj);
    if (statusTime == 0) {
        startTime = obj.innerHTML;
        storeObj = obj;
        storeObjIndex = objIndex;
        statusTime = 1;
    } else {
        if (objIndex <= storeObjIndex) {
            startTime = obj.innerHTML
            storeObj = obj;
            storeObjIndex = objIndex;
        } else {
            endTime = obj.innerHTML;
            statusTime = 0;
            timePickSureButton.style.display = "block";
        }
    }
}

function saveTimePeriod() {
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    document.getElementById("timeChoose").innerHTML = startTime + ' - ' + endTime;
}

function chooseLocation(location) {
    setLocation = location.innerHTML;
    console.log(location.innerHTML);
    localStorage.setItem("setLocation", setLocation);
    document.getElementById("locationChoose").innerHTML = setLocation;
    document.getElementById("locationChoose").value = location.value;
}

function choosePeople(people) {
    setPeople = people.innerHTML;
    console.log(people.innerHTML);
    localStorage.setItem("setPeople", setPeople);
    document.getElementById("peopleChoose").innerHTML = setPeople + '人';
    document.getElementById("peopleChoose").value = people.value;
}