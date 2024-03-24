fetch('https://api.sportmonks.com/v3/football/leagues?api_token=eMhs4Kp6zGy4jWWvgs6OoL632DP7oaOEFrH5IedmQplv3SNBUlsVHpSZqa52&include=upcoming.round; upcoming.stage; upcoming&filters=fixtureStates:1')
    .then(response => response.json())
    .then(data => {
        var table = document.createElement('table');
        data.data.forEach(league => {
            var row = table.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.textContent = league.name;
            league.upcoming.forEach(game => {
                var row = table.insertRow(-1);
                var cell = row.insertCell(-1);
                var link = document.createElement('a');
                link.href = 'https://matchmemo.weeblysite.com/s/shop?fixture_id=' + game.id;
                link.textContent = game.name;
                cell.appendChild(link);
            });
        });
        document.body.appendChild(table);
    });
