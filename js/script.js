
$('#submit').on('click', function() {
    var tempP1 = $('#search1').val();
    var tempP2 = $('#search2').val();
    console.log(tempP1);
    console.log(tempP2);
    getPlayers();
})

function getPlayers() {
    var requestUrl = 'https://fortnite-api.com/v2/stats/br/v2?name=TTV BD_Hype';

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
    });

    var requestUrl2 = 'https://fortnite-api.com/v2/stats/br/v2?name=skxawng6';

    $.ajax({
        url: requestUrl2,
        method: 'GET',
    }).then(function (response2) {
        console.log(response2);
    });
}



// setting up localStorage
// arguements that the api can take: name, accountType(epic/psn/xbl), timeWindow(season/lifetime), image (displays type of controller being used)

var apiLink = "https://fortnite-api.com/v2/stats/br/v2/"


/* function getInformation() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}*/


// AJAX call requires a third party library, jQuery
$.ajax({
  url: apiLink,
  name: "skxawng6",
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});