
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

var apiLink = "https://fortnite-api.com/v2/stats/br/v2/?name=ninja";
var historyParsed = "";


function getHistory() {
  // get value of input box
  $.ajax({
    url: apiLink,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    setHistory(response);
    console.log(response);
  })
}


function setHistory(apiResponse) {  
  if (apiResponse.status == 200) {
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    console.log(history);

    // if input is equal to a name already in the search history, do not push that names apiCall onto the JSON localStorage object thing
    history.push(apiResponse);
    window.localStorage.setItem("history", JSON.stringify(history));
    // historyParsed stores the array of JSON objects Pog
    // historyParsed = JSON.parse(localStorage.getItem("history"));
    // console.log(historyParsed);
  }
}


getHistory();

//   name: "skxawng6",