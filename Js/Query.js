function checkInputs(previewForm) {
    var fname = document.forms["queryform"]["fname"].value;    /*initialising variables*/
    var email = document.forms["queryform"]["email"].value;
    var comment = document.forms["queryform"]["comment"].value;
    var selector = document.querySelector('input[name="theme"]:checked');
    
    if (fname == "") {          /*Pop up the alert*/
        alert("Please enter your Full name");
    } else if (email == "") {
        alert("Please enter your Email address");
    } else if (selector == null) {
        alert("Please select a Grade");
    } else if (comment.value == "") {
        alert("Give us your valuable opinion");
    } else {
        previewForm(fname, email, comment, selector.value);
    }
}

function previewForm(fname, email, comment, selector) {     /*inner html preview form*/ 
    document.getElementById("form_content").innerHTML = 
        "<p>Name : <span>" +
        fname +
        "</span><br>Email Address : <span>" +
        email +
        "</span><br>Rate this site : <span>" +
        selector +
        "</span><br>Describe your experience : " +
        comment ; 
    document.getElementById("preview_form").style.display = "block";
    document.forms["queryform"].style.display = "none";
}

function editForm() {
    document.getElementById("preview_form").style.display = "none";
    document.forms["queryform"].style.display = "block";
}

function sendForm () {
    document.getElementById("queryform").submit();
    alert("Thank you for your Feedback!");
    location.reload();
}
