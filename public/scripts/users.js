// Client facing scripts here - JS Jquery -
$(() => {
  $("#todo-form").on("submit", (event) => {
    event.preventDefault()
    const searchTerm = $("#title").val();
    console.log(searchTerm)


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

    const moviesResult = $.ajax(settings).done(.ajax(function (response) {
      console.log(response);
    });

  });
});




    // const settings1 = {
    //   url: `https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972`,
    //   method: "GET",
    //   headers: {
    //     "accept": "application/json",
    //     "Access-Control-Allow-Origin": '*',
    //     "Authorization": bearerKey,
    //   },
    // };


// NEED TWO MORE APIS - ONE FOR BOOKS AND ONE FOR PRODUCTS AND WE NEED TO CONNECT THEM ALL TO THE SUBMIT BUTTON AND HAVE IT CATEGORIZE


    // $.ajax(settings1).done(function (response) {
    //   console.log(response);
    // });
