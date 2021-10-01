
$('#submit').on('click', function () {
    var tempP1 = $('#search1').val();
    var tempP2 = $('#search2').val();
    var tempLS = JSON.parse(localStorage.getItem('autocomplete'));
    var tempHB = JSON.parse(localStorage.getItem('historyButtons'));
    if (tempLS == null) {
        tempLS = [];
    }
    if (tempHB == null) {
        tempHB = [];
    }
    if (tempLS.includes(tempP1) 
    && !tempLS.includes(tempP2)) {
        tempLS.unshift(tempP2);
    } else if (!tempLS.includes(tempP1) 
    && tempLS.includes(tempP2)) {
        tempLS.unshift(tempP1);
    } else if (!tempLS.includes(tempP1) 
    && !tempLS.includes(tempP2)) {
        tempLS.unshift(tempP1);
        tempLS.unshift(tempP2);
    }
    if (tempHB.includes(tempP1) 
    && !tempHB.includes(tempP2)) {
        tempHB.unshift(tempP2);
    } else if (!tempHB.includes(tempP1) 
    && tempHB.includes(tempP2)) {
        tempHB.unshift(tempP1);
    } else if (!tempHB.includes(tempP1) 
    && !tempHB.includes(tempP2)) {
        tempHB.unshift(tempP1);
        tempHB.unshift(tempP2);
    }
    if (tempHB) {
        if (tempHB.length == 12) {
            tempHB.pop();
            tempHB.pop();
        } else if (tempHB.length == 11) {
            tempHB.pop();
        }
    }
    localStorage.setItem('autocomplete', JSON.stringify(tempLS));
    localStorage.setItem('historyButtons', JSON.stringify(tempHB));
    console.log(tempP1);
    console.log(tempP2);
    getPlayers(tempP1, tempP2);
})

function getPlayers(player1, player2) {
    var requestUrl = 'https://fortnite-api.com/v2/stats/br/v2?name=' + player1;

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        $('#p1w').text(response.data.stats.all.overall.wins);
        $('#p1win').text(response.data.stats.all.overall.winRate);
        $('#p1kd').text(response.data.stats.all.overall.kd);
        $('#p1tk').text(response.data.stats.all.overall.kills);
        $('#p1sw').text(response.data.stats.all.solo.wins);
        $('#p1skd').text(response.data.stats.all.solo.kd);
        $('#p1dw').text(response.data.stats.all.duo.wins);
        $('#p1dkd').text(response.data.stats.all.duo.kd);
        $('#p1sqw').text(response.data.stats.all.squad.wins);
        $('#p1sqkd').text(response.data.stats.all.squad.kd);
        setHistory(response);
    });

    var requestUrl2 = 'https://fortnite-api.com/v2/stats/br/v2?name=' + player2;

    $.ajax({
        url: requestUrl2,
        method: 'GET',
    }).then(function (response2) {
        console.log(response2);
        $('#p2w').text(response2.data.stats.all.overall.wins);
        $('#p2win').text(response2.data.stats.all.overall.winRate);
        $('#p2kd').text(response2.data.stats.all.overall.kd);
        $('#p2tk').text(response2.data.stats.all.overall.kills);
        $('#p2sw').text(response2.data.stats.all.solo.wins);
        $('#p2skd').text(response2.data.stats.all.solo.kd);
        $('#p2dw').text(response2.data.stats.all.duo.wins);
        $('#p2dkd').text(response2.data.stats.all.duo.kd);
        $('#p2sqw').text(response2.data.stats.all.squad.wins);
        $('#p2sqkd').text(response2.data.stats.all.squad.kd);
        setHistory(response2);
    });
}

$(function () {
    var availableTags = JSON.parse(localStorage.getItem('autocomplete'));
    $("#search1").autocomplete({
        source: availableTags
    });
});
$(function () {
    var availableTags = JSON.parse(localStorage.getItem('autocomplete'));
    $("#search2").autocomplete({
        source: availableTags
    });
});

// setting up localStorage
// arguements that the api can take: name, accountType(epic/psn/xbl), timeWindow(season/lifetime), image (displays type of controller being used)

// var apiLink = "https://fortnite-api.com/v2/stats/br/v2/?name=ninja";
// var historyParsed = "";


// function getHistory() {
//   get value of input box
//   $.ajax({
//     url: apiLink,
//     method: 'GET',
//   }).then(function (response) {
//     console.log('Ajax Reponse \n-------------');
//     setHistory(response);
//     console.log(response);
//   })
// }


function setHistory(apiResponse) {  
  if (apiResponse.status == 200) {

    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    console.log(history);


    // if input is equal to a name already in the search history, do not push that names apiCall onto the JSON localStorage object thing

    // console.log(apiResponse.account.name);
    // firstTwo = apiResponse.slice(0,2);
    // if (apiResponse.data.account.name == )
    history.push(apiResponse);


    // history.push(apiResponse.data.account.name);
    // history.push(apiResponse.data.stats.all);

    // history.push(apiResponse.account.name);
    // history.push(apiResponse.stats.all);
    if (history.length > 10) {

    }
    
    window.localStorage.setItem("history", JSON.stringify(history));

    // historyParsed stores the array of JSON objects Pog
    

    // console.log(historyParsed[0].data.account.name);
  }
}

function barGraph () {
  var barGraph = JSON.parse(window.localStorage.getItem("history"));
  var temp0 = [joey, cam, will, darion];
  var kills = [11, 12, 13, 14]
  for (var i = 0; i < barGraph.length; i++) {
    temp0.push(barGraph[0].data.account.name);
    temp0.push(barGraph[0].data.stats.kills);

    // temp[i] = barGraph[i].data
  }
}


// getHistory();

//   name: "skxawng6",