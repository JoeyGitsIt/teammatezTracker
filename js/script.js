
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
    debugger
    if (tempP1 != "" && tempP2 != "") {
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
    document.querySelector('#topPlayers').style.display = "none";
    document.querySelector('#searchedPlayers').style.display = "block";
})

function getPlayers(player1, player2) {
    var requestUrl = 'https://fortnite-api.com/v2/stats/br/v2?name=' + player1;

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        // $('#p1').innerHTML = response.data.account.name;
        $('#p1').text(response.data.account.name);
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
        // $('#p2').innerHTML = response2.data.account.name;
        $('#p2').text(response2.data.account.name);
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

function getTopPlayers() {
    var requestUrl = 'https://fortnite-api.com/v2/stats/br/v2?name=ship';

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        // $('#p1').innerHTML = response.data.account.name;
        $('#tp1').text(response.data.account.name);
        $('#tp1w').text(response.data.stats.all.overall.wins);
        $('#tp1win').text(response.data.stats.all.overall.winRate);
        $('#tp1kd').text(response.data.stats.all.overall.kd);
        $('#tp1tk').text(response.data.stats.all.overall.kills);
        $('#tp1sw').text(response.data.stats.all.solo.wins);
        $('#tp1skd').text(response.data.stats.all.solo.kd);
        $('#tp1dw').text(response.data.stats.all.duo.wins);
        $('#tp1dkd').text(response.data.stats.all.duo.kd);
        $('#tp1sqw').text(response.data.stats.all.squad.wins);
        $('#tp1sqkd').text(response.data.stats.all.squad.kd);
    });
    getSecondTop();
}

function getSecondTop() {
    var requestUrl2 = 'https://fortnite-api.com/v2/stats/br/v2?name=king jterra';

    $.ajax({
        url: requestUrl2,
        method: 'GET',
    }).then(function (response2) {
        console.log(response2);
        // $('#p2').innerHTML = response2.data.account.name;
        $('#tp2').text(response2.data.account.name);
        $('#tp2w').text(response2.data.stats.all.overall.wins);
        $('#tp2win').text(response2.data.stats.all.overall.winRate);
        $('#tp2kd').text(response2.data.stats.all.overall.kd);
        $('#tp2tk').text(response2.data.stats.all.overall.kills);
        $('#tp2sw').text(response2.data.stats.all.solo.wins);
        $('#tp2skd').text(response2.data.stats.all.solo.kd);
        $('#tp2dw').text(response2.data.stats.all.duo.wins);
        $('#tp2dkd').text(response2.data.stats.all.duo.kd);
        $('#tp2sqw').text(response2.data.stats.all.squad.wins);
        $('#tp2sqkd').text(response2.data.stats.all.squad.kd);
    });
}

$(window).load(getTopPlayers());

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

function setHistory(apiResponse) {  
  if (apiResponse.status == 200) {
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    console.log(history);

    history.unshift(apiResponse);

    if (history.length > 10) {
        history.pop();
    }
    
    window.localStorage.setItem("history", JSON.stringify(history));
  }
}

var names;
var timePlayed;
var kdRatio;
var winPercentage;


function barGraph () {
  var barGraph = JSON.parse(window.localStorage.getItem("history"));
  names = [];
  timePlayed = [];
  kdRatio = [];
  winPercentage = [];

  console.log("is it working?")

  for (var i = 0; i < barGraph.length; i++) {
    names.push(barGraph[i].data.account.name);
    timePlayed.push(barGraph[i].data.stats.all.overall.minutesPlayed);
    kdRatio.push(barGraph[i].data.stats.all.overall.kd);
    winPercentage.push(barGraph[i].data.stats.all.overall.winRate);
  }
  var list = document.querySelector('#teammateList');
  var tempHL = JSON.parse(localStorage.getItem('historyButtons'))
  for (var i = 0; i < tempHL.length; i++) {
      var temp = tempHL[i];
      var tempLabel = document.createElement('li');
      tempLabel.innerHTML = temp.toUpperCase();
      list.appendChild(tempLabel);
  }
  
}

$(window).load(barGraph());

// function to create chart after page loads

function createChartKD (labels, values){


    var ctx = document.getElementById('kdChart').getContext('2d');
    var kdChart = new Chart(ctx, {
        type: 'bar',
        data: { 
            labels: labels,
            datasets: [{
                label: 'Stats',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(150, 92, 132, 0.2)',
                    'rgba(105, 176, 11, 0.2)',
                    'rgba(221, 170, 102, 0.2)',
                    'rgba(255, 204, 204, 0.2)'
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',                           
                    'rgba(255, 159, 64, 1)',
                    'rgba(150, 92, 132, 1)',
                    'rgba(105, 176, 11, 1)',
                    'rgba(221, 170, 102, 1)',
                    'rgba(255, 204, 204, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display:false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
createChartKD(names, kdRatio) 

    function createChartWin (labels, values){


        var ctx = document.getElementById('winpChart').getContext('2d');
        var winPChart = new Chart(ctx, {
            type: 'bar',
            data: { 
                labels: labels,
                datasets: [{
                    label: '',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(150, 92, 132, 0.2)',
                        'rgba(105, 176, 11, 0.2)',
                        'rgba(221, 170, 102, 0.2)',
                        'rgba(255, 204, 204, 0.2)'
                        ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',                           
                        'rgba(255, 159, 64, 1)',
                        'rgba(150, 92, 132, 1)',
                        'rgba(105, 176, 11, 1)',
                        'rgba(221, 170, 102, 1)',
                        'rgba(255, 204, 204, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                legend: {
                    display:false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
createChartWin(names, winPercentage);

//Time Played chart

function chartTimePlayed (labels, values) {

    var ctx = document.getElementById('timePlayed').getContext('2d');
        var timePlayed = new Chart(ctx, {
            type: 'doughnut',
            data: { 
                labels: labels,
                datasets: [{
                    label: labels,
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(150, 92, 132, 0.2)',
                        'rgba(105, 176, 11, 0.2)',
                        'rgba(221, 170, 102, 0.2)',
                        'rgba(255, 204, 204, 0.2)'
                        ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',                           
                        'rgba(255, 159, 64, 1)',
                        'rgba(150, 92, 132, 1)',
                        'rgba(105, 176, 11, 1)',
                        'rgba(221, 170, 102, 1)',
                        'rgba(255, 204, 204, 1)'
                        ],
                    borderWidth: 1,
                }]
            },
        //    options: {
        // });
    });
}
chartTimePlayed(names, timePlayed);