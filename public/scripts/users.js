// Client facing scripts here - JS Jquery -
$(() => {
  $("#fetch-users").on("click", () => {
    const searchTerm = $("#search").val()
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchTerm}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": yelpAPI,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const moviesResult = $.ajax(settings).done(function (response) {
      console.log(response);
      console.log(abc)
    });
    $.when(moviesResult).done(function(movies){})
  });
});

