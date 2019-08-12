$(document).ready(function() {
  $.ajax({
    url: "https://restcountries.eu/rest/v2",
    method: "GET",
    dataType: "JSON",
    success: function(data) {
      $.each(data, function(i, country) {
        $(".country-container .row").append(
          '<div class="card m-4" style="width: 18rem;">' +
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
            "<li class='" +
            country.region +
            "'>Region: " +
            country.region +
            "</li>" +
            "<li>Capital: " +
            country.capital +
            "</li>" +
            "</ul>" +
            "</div>" +
            "</div>"
        );

        $(".dropdown-menu a").click(function() {
          let value = $(this).text();
          if ("." + country.region !== "." + value) {
            $("." + country.region)
              .closest(".card")
              .addClass("hide-card")
              .removeClass("show-card");
          } else if ("." + country.region === value) {
            $("." + country.region)
              .closest(".card")
              .addClass("show-card")
              .removeClass("hide-card");
          } else {
            $(".card").removeClass("show-card", "hide-card");
          }
        });

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
    }
  });
});
