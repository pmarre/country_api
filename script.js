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

        // Search for country
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

      // Filter Cards By Region
      $(".dropdown-item").click(function() {
        $(".card").removeClass("d-none");
        let filter = $(this).text(); // get the value of the input, which we filter on
        console.log(filter);
        $(".country-container .row")
          .find('.card:not(:contains("' + filter + '"))')
          .addClass("d-none");
        if (filter === "Clear") {
          $(".card").removeClass("d-none");
        }
      });
    }
  });

  // Toggle Dark Mode
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
