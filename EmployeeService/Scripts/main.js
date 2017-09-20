// Click method for the modal to open
$("#btnRegister").on("click", function () {
    $.ajax({
        url: "/api/account/register",
        method: "POST",
        data: {
            email: $("#txtEmail").val(),
            password: $("#txtPassword").val(),
            confirmPassword: $("#txtConfirmPassword").val()
        },
        success: function () {
            $("#successModal").modal("show");
        },
        error: function (jqXHR) {
            $("#divErrorText").text(jqXHR.responseText);
            $("#divError").show("fade");
        }
    });
});

// Close alert window
$("#linkClose").on("click", function () {
    $("#divError").hide("show");
});