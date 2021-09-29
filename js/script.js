

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