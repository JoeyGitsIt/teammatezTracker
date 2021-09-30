

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
    });

    var requestUrl2 = 'https://fortnite-api.com/v2/stats/br/v2?name=skxawng6';

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
    });
}