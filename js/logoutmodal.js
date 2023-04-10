// Get the button that opens the modal
var btn = document.querySelectorAll(".modal-button");
console.log(btn)
// All page modals
var modals = document.querySelectorAll('.modal');
console.log(modals)
// Get the .no element that closes the modal
var no = document.getElementsByClassName("no");
var yes = document.getElementsByClassName("yes");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        console.log(modal)
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < no.length; i++) {
    no[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}