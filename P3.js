
/**
 * 
 * Authors:  Suleman Malik  (A00441091)
 *           Jazib Ahmed    (A00452355)
 *           Kashif Chaudry (A00446369)
 *           Gurmehar Singh (A00445785)
 * 
 * The purpose of this file is to hold the functionality for Phase 3 of the project. This file adds characters from the on-screen keyboard
 * upon user selection. It contains the function for the toggles which when selected make the keyboard and the text area visible for the 
 * user to write about the blog. It saves the text when the save button is pressed and clears the text when cancel button is pressed. It 
 * also saves the wordbank text and also sends the blogs to the server indicating if they have been published or not. 
 * 
 */

//getters
const SERVER_URL = "http://140.184.230.209:3022";
$.get(SERVER_URL + "/myGetter", serverCallBack).fail(errorCallback1);

var capsOn;         // for the caps button to capitalize letters.
let switch1 = false;                // for toggle switch 1 
let switch2 = false;                // for toggle switch 2
let switch3 = false;                // for toggle switch 3
let banking = 0;                    // for word bank
let fav = [];                       // word bank array
let FAV = [];                       // word bank array from server
let shiftOn = false; // for shift
/**
 * This funciton contains the functionality for the wordbank. 
 *      Click the button first to activate the word bank text. Write the text. Click the button again to save it. 
 */
function myBanking() {
    // text from the input of button
    if (banking == 0) {
        banking = 1;
        $("#bank").val("");
    } else if (banking == 1) {
        banking = 0;
        const xy = $("#bank").val();
        if (xy.length == 0) {
            alert("Please enter in text box");
        } else {
            fav.push(xy);
            var x = document.getElementById("bbb");
            x.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-light" onclick="addChar(' + " ' " + xy + " ' " + ')">' + xy + '</button');
            // it will add the button 
            $("#bank").val("");
        }
    }
}

/** 
 * This is the function for when shift is clicked 
*/
function shift() {
    shiftOn = true;
    document.getElementById("kbrdtxt1").style.display = "none";
    document.getElementById("kbrdtxt2").style.display = "block";
}
/**
 * for initial screen
 */
function setup() {
    document.getElementById("kbrdtxt1").style.display = "none";
    document.getElementById("kbrdtxt2").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    document.getElementById("words1").style.display = "none";
    document.getElementById("words2").style.display = "none";
    document.getElementById("words3").style.display = "none";

}
/**
 * This functions contains the functionality for adding characters of the on screen keyboard to the text box through user seelction.
 * It also contains the functionality for deleting characters i.e. backspace.  
 * @param {*} selection 
 */
function addChar(selection) {
    // Get the value from the id'ed field

    var currChars1 = $("#words1").val();
    var currChars2 = $("#words2").val();
    var currChars3 = $("#words3").val();
    var bank = $("#bank").val();
    if (banking == 0) {
        if (selection === "bksp") {
            // Set the id'ed field to a shortened string
            $("#words1").val(currChars1.substring(0, currChars1.length - 1));
            $("#words2").val(currChars2.substring(0, currChars2.length - 1));
            $("#words3").val(currChars3.substring(0, currChars3.length - 1));
        } else {
            if (!capsOn) {
                $("#words1").val(currChars1.concat(selection));
                $("#words2").val(currChars2.concat(selection));
                $("#words3").val(currChars3.concat(selection));

            } else {
                // Set the id'ed field to the longer string
                $("#words1").val(currChars1.concat(selection.toUpperCase()));
                $("#words2").val(currChars2.concat(selection.toUpperCase()));
                $("#words3").val(currChars3.concat(selection.toUpperCase()));

                document.getElementById("kbrdtxt1").style.display = "block";
            }
        }
        // after clicking bank
    } else {
        if (selection === "bksp") {
            $("#bank").val(bank.substring(0, bank.length - 1));
        } else {
            if (!capsOn) {
                $("#bank").val(bank.concat(selection));
            } else {
                $("#bank").val(bank.concat(selection.toUpperCase()));
            }
        }
    }
    if (shiftOn) {
        shiftOn = false;
        document.getElementById("kbrdtxt1").style.display = "block";
        document.getElementById("kbrdtxt2").style.display = "none";
    }
}
/**
 * This function contains the functionality for the enter button. it add a line.
 */
function enter() {
    addChar('\n');
}

/**
 * This function contains the funtionality for the caps button which when pressed makes the letter capital. 
 */
function caps() {
    if (capsOn) {
        capsOn = false;
        document.getElementById("kbrdtxt1").style.display = "block";
        document.getElementById("kbrdtxt2").style.display = "none";
    } else {
        capsOn = true;
        document.getElementById("kbrdtxt1").style.display = "none";
        document.getElementById("kbrdtxt2").style.display = "block";
    }
}
/**
 * This function contains the functionality for the toggles and the save button. When one toggle is selected, the other two become invisible and
 * the keyboard along with the text box become visible indicating that the user can only work on one blog at a time. 
 */
/*
function editPublish(x) {
    /**
    if (x == 1) {
        x = 4;
        let pubBool1 = true;
        let pubObj1 = { publish1: pubBool1 }
        $.post(SERVER_URL + '/pub1', pubObj1, serverCallBack).fail(errorCallback1);
    } else if (x == 4) {
        let pubBool1 = false;
        let pubObj1 = { publish1: pubBool1 }
        $.post(SERVER_URL + '/pub1', pubObj1, serverCallBack).fail(errorCallback1);
    }
    if (x == 2) {
        let pubBool2 = true;
        let pubObj2 = { publish2: pubBool2 }
        $.post(SERVER_URL + '/pub2', pubObj2, serverCallBack).fail(errorCallback1);
    }
    if (x == 3) {
        let pubBool3 = true;
        let pubObj3 = { publish3: pubBool3 }
        $.post(SERVER_URL + '/pub3', pubObj3, serverCallBack).fail(errorCallback1);
    }
     */
/**
let pubBool = ($('#pub' + x).prop('checked') === false)
console.log('pubCheck' + x + ': ' + pubBool)

let pubObj = { publish: pubBool }
$.post(SERVER_URL + '/pub' + x, pubObj, serverCallBack).fail(errorCallback1);

}
**/

/**
 * This function contains the functionality for the edit switches. Which on click view the text area and keyboard.
 */
function editSwitches() {
    // for switch 1
    $("#switch1").on("change", function () {
        if (this.checked) {
            document.getElementById("kbrdtxt1").style.display = "block";
            document.getElementById("con1").style.display = "none";
            document.getElementById("bottom").style.display = "block";
            document.getElementById("words1").style.display = "block";
            document.getElementById("words2").style.display = "none";
            document.getElementById("words3").style.display = "none";
            //
            switch1 = true;
        }
    });
    //for switch 2
    $("#switch2").on("change", function () {

        if (this.checked) {
            document.getElementById("kbrdtxt1").style.display = "block";
            document.getElementById("con1").style.display = "none";
            document.getElementById("bottom").style.display = "block";
            document.getElementById("words1").style.display = "none";
            document.getElementById("words2").style.display = "block";
            document.getElementById("words3").style.display = "none";
            switch2 = true;
        }
    });
    //for switch 3
    $("#switch3").on("change", function () {
        document.getElementById("kbrdtxt1").style.display = "block";
        document.getElementById("con1").style.display = "none";
        document.getElementById("bottom").style.display = "block";
        document.getElementById("words1").style.display = "none";
        document.getElementById("words2").style.display = "none";
        document.getElementById("words3").style.display = "block";
        //
        switch3 = true;
    });
}
/**
 * This function contains the functionality of saving the text.
 */
function save() {
    let text = "Are you sure you want to save?";    //the modal
    if (confirm(text) == true) {
        let text = "Are you really sure you want to save?"; //the second modal
        if (confirm(text) == true) {
            let z = { text4: fav };
            $.post(SERVER_URL + "/bank", z, callback).fail(errorCallback1);
            if (switch1) {
                let z = { text1: $("#words1").val() }
                $.post(SERVER_URL + "/box1", z, callback1).fail(errorCallback1);
            } else if (switch2) {
                let z = { text2: $("#words2").val() };
                $.post(SERVER_URL + "/box2", z, callback1).fail(errorCallback1);
            } else if (switch3) {
                let z = { text3: $("#words3").val() };
                $.post(SERVER_URL + "/box3", z, callback1).fail(errorCallback1);
            }
        }
    }
}


/**
 * This functions erases the text in the textbox when the cancel button is clicked. 
 */
function cancel() {
    let text = "Are you sure you want to cancel?";  //the cancel modal
    if (confirm(text) == true) {
        let text = "Are you really sure you want to cancel?";   //the second modal for cancel
        if (confirm(text) == true) {
            $("#words1").val("");
            $("#words2").val("");
            $("#words3").val("");
            location.reload();
        }
    }
}
/**
 * This funtions contains the functionality for the undo button which undo's the last word.
 */
function undoButton() {
    // Get the value from the id'ed field

    var currChars1 = $("#words1").val().trim();
    var currChars2 = $("#words2").val().trim();
    var currChars3 = $("#words3").val().trim();
    var bank = $("#bank").val().trim();
    if (banking == 0) {
        var lastChars1 = $("#words1").val().trim().split(' ')[currChars1.split(' ').length - 1];
        var lastChars2 = $("#words2").val().trim().split(' ')[currChars2.split(' ').length - 1];
        var lastChars3 = $("#words3").val().trim().split(' ')[currChars3.split(' ').length - 1];

        let newChars1 = currChars1.substring(0, (currChars1.length - lastChars1.length));
        let newChars2 = currChars2.substring(0, (currChars2.length - lastChars2.length));
        let newChars3 = currChars3.substring(0, (currChars3.length - lastChars3.length));

        $("#words1").val(newChars1);
        $("#words2").val(newChars2);
        $("#words3").val(newChars3);
        //in word bank
    } else {
        var lastChars = $("#bank").val().trim().split(' ')[bank.split(' ').length - 1];
        let newChars = bank.substring(0, (bank.length - lastChars.length));
        $("#bank").val(newChars);
    }
}

/**
 * This is for call back
 * 
 * @param {*} blog is array where all text are stored.
 */
function serverCallBack(blog) {
    $("#words1").val(blog[0]);
    $("#words2").val(blog[1]);
    $("#words3").val(blog[2]);
    if (blog[4] == 'true') {
        document.getElementById('pub1').checked = true;
    }
    if (blog[5] == 'true') {
        document.getElementById('pub2').checked = true;
    }
    if (blog[6] == 'true') {
        document.getElementById('pub3').checked = true;
    }
    FAV = blog[3];

}
/**
 * It will call back data
 * 
 * @param {*} returnedData is data from server
 */
function callback(returnedData) {
    console.log(returnedData);
}
/**
 * It wil  call back data
 * 
 * @param {*} returnedData 
 */
function callback1(returnedData) {
    $("#switch1").prop("uncheck", true);
    $("#switch2").prop("uncheck", true);
    $("#switch3").prop("uncheck", true);
    setup();
    document.getElementById("con1").style.display = "block";
    console.log(returnedData);
}
/**
 * Call back if there's error.
 * 
 * @param {*} err it will data to call back
 */
function errorCallback1(err) {
    console.log(err.responseText);
}
/**
 * It will do the publish button
 */
let pubBool = false;
function editPublish() {
    // for switch 1
    let x = document.getElementById('pub1').checked;
    let xObj = { publish1: x };
    $.post(SERVER_URL + "/pub1", xObj, callback1).fail(errorCallback1);;
    // for switch 2
    let y = document.getElementById('pub2').checked;
    let yObj = { publish2: y };
    $.post(SERVER_URL + "/pub2", yObj, callback1).fail(errorCallback1);
    // for switch 3
    let z = document.getElementById('pub3').checked;
    let zObj = { publish3: z };
    $.post(SERVER_URL + "/pub3", zObj, callback1).fail(errorCallback1);
}
/**
 * this will get the first blog
 */
function blogGet1() {

    if ($.get(SERVER_URL + "/pub1", isPublish1).fail(errorCallback1)) {
        $.get(SERVER_URL + "/Blog1", displayBlog1).fail(errorCallback1);
    } else {
        console.log("lets go");
        $("#blog1").val("Sorry. This blog is currently not available.");
    }
}
/**
 * this will get the second blog
 */
function blogGet2() {
    if ($.get(SERVER_URL + "/pub2", isPublish2).fail(errorCallback1)) {
        $.get(SERVER_URL + "/Blog2", displayBlog2).fail(errorCallback1);
    } else {
        $("#blog2").val("Sorry. This blog is currently not available.");
    }
}
/**
 * this will get the third blog
 */
function blogGet3() {
    if ($.get(SERVER_URL + "/pub3", isPublish3).fail(errorCallback1)) {
        $.get(SERVER_URL + "/Blog3", displayBlog3).fail(errorCallback1);
    } else {
        $("#blog3").val("Sorry. This blog is currently not available.");
    }
}
/**
 * this will check publish statius for first blog
 * 
 * @param {*} blog 
 */
function isPublish1(blog) {
    console.log(blog[4]);
    if (blog[4] == 'true') {
        return true;
    } else if (blog[4] == 'false') {
        return false;

    }
}
/**
 * this will check publish statius for second blog
 * 
 * @param {*} blog 
 */
function isPublish2(blog) {
    console.log(blog[5]);
    if (blog[5] == 'true') {
        return true;
    } else {
        $("#blog3").val("Sorry. This blog is currently not available.");
        return false;
    }
}
/**
 * this will check publish status for third blog
 * 
 * @param {*} blog 
 */
function isPublish3(blog) {
    console.log(blog[6]);
    if (blog[6] == 'true') {
        return true;
    } else {
        return false;
    }
}

/**
 * this will display first blog
 * 
 * @param {*} blog 
 */
function displayBlog1(blog) {
    $("#blog1").val(blog[0]);
}
/**
 * this will display second blog
 * 
 * @param {*} blog 
 */
function displayBlog2(blog) {
    $("#blog2").val(blog[1]);
}
/**
 * this will display third blog
 * 
 * @param {*} blog 
 */
function displayBlog3(blog) {
    $("#blog3").val(blog[2]);
}