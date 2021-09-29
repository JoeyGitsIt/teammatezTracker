var requestUrl = 'https://fortnite-api.com/v2/stats/br/v2?name=ranger';

$.ajax({
    url: requestUrl,
    method: 'GET',
}).then(function (response) {
    console.log(response);
});

$('#submit').on('click', function() {
    debugger;
    var tempP1 = $('#search1').val();
    var tempP2 = $('#search2').val();
    console.log(tempP1);
    console.log(tempP2);
})