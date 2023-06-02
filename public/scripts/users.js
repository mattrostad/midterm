// Client facing scripts here - JS Jquery -
$(() => {
  $("#fetch-users").on("click", () => {
    const searchTerm = $("#search").val();


    const settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchTerm}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidAPI,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const moviesResult = $.ajax(settings).done(function (response) {
      console.log(response);
    });
    const settings1 = {
      url: `https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972`,
      method: "GET",
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": '*',
        "Authorization": bearerKey,
      },
    };

    $.ajax(settings1).done(function (response) {
      console.log(response);
    });
  });
});


