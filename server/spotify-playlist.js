var  request = require('request');
var  user_id = "224nlnmrxjp6thocol5zoriui";
var token = "BQAPjM2sGCF9vfZtS-Ly7F940q-vZl1rKOVlFMgRxE57bLHHtbhUfBCOTXVywULiqmeJhKqnskM_4frpMVH0bFAeRewL1i34vYBV27A6Gbcf6kPhHxRYt-_HyH1HA790ob8NP08WediDS3OgE18KeetoKFxlVgZkEg"
var playlist_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists"

request({url: playlist_url, headers:{Authorization:token}}, function(err, res) {
    if (err) {
        console.log("error getting playlist!")
    }
    if (res){
        var  playlists = JSON.parse(res.body);
        var playlist_url = "";//playlists[0].herf:
        request({url: playlist_url, headers:{Authorization:token}}, function(err, res) {
            if (err) {
                console.log("error getting playlist!")
            }
            if (res){
                var  playlist = JSON.parse(res.body);
                console.log("playlist: " + playlist.name);
                playlist.tracks.forEach(function(track) {
                    console.log(tracks.track.name);
                });
            }
        });    
                
    }
});