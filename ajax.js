$(document).ready(function () {
  $(".ajaxDataForTestOnly").click(function (e) {
    var load_url = this.id;
    load_url = load_url + "_conteudo.html";

    $.ajax({
      url: load_url,
      beforeSend: function () {
        $("#loader").css("display", "block");
      },
      success: function (response) {
        $("#dataDisplay").html(response);
      },
      complete: function () {
        $("#loader").css("display", "none");
      },
      error: function () {
        alert("Ajax request failed");
      },
    });
  });
});
