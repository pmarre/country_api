$(document).ready(function() {
  $.ajax({
    url: "https://restcountries.eu/rest/v2",
    method: "GET",
    dataType: "JSON",
    success: function(data) {
      $.each(data, function(i, country) {
        $(".country-container .row").append(
          '<div class="card m-4 ' +
            country.region +
            '" style="width: 18rem;">' +
            '<img src="' +
            country.flag +
            '" class="card-img-top" alt="' +
            country.name +
            "'s Flag\">" +
            ' <div class="card-body">' +
            '<h5 class="card-title">' +
            country.name +
            "</h5>" +
            '<ul class="card-text">' +
            "<li>Population: " +
            country.population +
            "</li>" +
            "<li>Region: " +
            country.region +
            "</li>" +
            "<li>Capital: " +
            country.capital +
            "</li>" +
            "</ul>" +
            "</div>" +
            "</div>"
        );

        $("#search").on("keyup", function() {
          let value = $(this)
            .val()
            .toLowerCase();
          $(".card").filter(function() {
            $(this).toggle(
              $(this)
                .text()
                .toLowerCase()
                .indexOf(value) > -1
            );
          });
        });
      });

      $(".dropdown-item").click(function() {
        "use strict";
        let value = $(this).text();

        $.each(data, function(j, obj) {
          if ($("div.card").hasClass(obj.region) === false) {
            console.log(obj.region);
            // if ($(".card").hasClass(value) !== "." + value) {
            $(this).addClass(".hide-card");
            // console.log(valueClass);
            // }
          }
        });
      });
    }
  });

  $(".dark-icon").click(function() {
    $("body").toggleClass("dark-mode-primary-bg");
    $(".card, #search").toggleClass("dark-mode-secondary-bg");
    $(".navbar")
      .toggleClass("bg-light")
      .toggleClass("dark-mode-secondary-bg");
    $(".nav-item, .navbar-brand").toggleClass("dark-mode-text");

    $(".dark-icon i")
      .toggleClass("far fa-moon")
      .toggleClass("fa fa-sun");
    if ($(".dark-icon p").text() === "Light Mode") {
      $(".dark-icon p").text("Dark Mode");
    } else {
      $(".dark-icon p").text("Light Mode");
    }
  });
});
