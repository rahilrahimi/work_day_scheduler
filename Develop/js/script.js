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

type = "text/javascript"
$(document).ready(function () {
    $("#Button1").click(function () {
        $.ajax({
            type: 'POST',
            contentType: "application/json;charset=utf-8",
            url: 'Default2.aspx/InsertMethod',
            data: "{'username':'" + document.getElementById('txtusername').value + "','password':'" + document.getElementById("txtpassword").value + "'}",
            async: false,
            success: function (response) {
                $('#txtusername').val('');
                $('#txtpassword').val('');
                alert("record has been saved in database");

            },
            error: function () {
                console.log('there is some error');
            }

        });

    });

});






// get value from spesific text box with "this" function 
// lastly stor that value into lolcalstorage