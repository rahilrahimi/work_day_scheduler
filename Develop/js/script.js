$('#currentDay').text(moment().format('dddd, MMMM Do'));

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


//( jquery ) make onsavebtn click run a function inside of that function have cosole.log to veryfay that fuction run
var value=i;//global variable  
function (){  
alert(value);  
}  
function b(){  
alert(value);  
}  






// get value from spesific text box with "this" function 
// lastly stor that value into lolcalstorage