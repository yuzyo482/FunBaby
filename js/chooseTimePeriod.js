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
            if (typeof timeChooseTable.style !== 'undefined') document.querySelector("div.timeTable").style.display = "none";
        }
    }
}