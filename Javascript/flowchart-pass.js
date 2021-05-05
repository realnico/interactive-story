// Function for password to Flowchart
function password() {
    var password = "perception";
    var x = prompt("Enter the password");
    if (x.toLowerCase() == password) {
        alert("Wait, how did you know the password?");
        window.location = "flowchart.html";
        }
else {
alert("Maybe play the game first?");
alert("Do you understand?");
alert("Are you sure?");
 window.location = "index.html";
}
}