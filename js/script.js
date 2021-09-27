$('#currentDay').text(moment().format('dddd, MMMM Do'));
//  time blocks for standard business hours, whether it is in past,present, or future

$(document).ready(function () {
    var textAreas = $('textarea')
    var hour = moment().hour()
    for (var i = 0; i < textAreas.length; i++) {
        var currentTextArea = textAreas[i]
        var currentId = parseInt(currentTextArea.id)
        if (hour < currentId) {
            $(currentTextArea).addClass("future")
        }
        else if (hour > currentId) {
            $(currentTextArea).addClass("past")
        }
        else {
            $(currentTextArea).addClass("present")
        }

    }

})

// stor that value into lolcalstorage

$(".saveBtn").click(function (e) {
    console.log(e.target);
    console.log($(this).siblings('.textSave').val());
    localStorage.setItem($(this).siblings('.textSave').attr('id'), $(this).siblings('.textSave').val());

    alert("Handler for .click() called.");
    setStyles();
});
//( jquery ) make onsavebtn click run a function inside of that function have cosole.log to veryfay that fuction run

function setStyles() {
    // console.log(localStorage.getItem('17'));
    $("#9").text(localStorage.getItem('9'));
    $("#10").text(localStorage.getItem('10'));
    $("#11").text(localStorage.getItem('11'));
    $("#12").text(localStorage.getItem('12'));
    $("#13").text(localStorage.getItem('13'));
    $("#14").text(localStorage.getItem('14'));
    $("#15").text(localStorage.getItem('15'));
    $("#16").text(localStorage.getItem('16'));
    $("#17").text(localStorage.getItem('17'));
    $("#18").text(localStorage.getItem('18'));
    $("#19").text(localStorage.getItem('19'));
    $("#20").text(localStorage.getItem('20'));
    $("#21").text(localStorage.getItem('21'));
    $("#22").text(localStorage.getItem('22'));
}
setStyles();

