$(document).ready(function() {

    $("#new-user").submit(function (event) { 
        if (checkPasswords()) return;

        alert("The passwords don't match!");
        event.preventDefault();
    });
    function checkPasswords() {
        var password = $("#ogPassword").val();
        var reentered = $("#rePassword").val();
    
        return (password == reentered)
    }
});