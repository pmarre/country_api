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
    }
  });
});
