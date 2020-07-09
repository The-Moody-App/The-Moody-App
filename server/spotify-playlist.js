var  request = require('request');
var  user_id = "224nlnmrxjp6thocol5zoriui";
var token = "BQDdM9jqiN_AJhQkpoupvrTrLKdMLNOCn9GwghGIQdxG6_R3dC3E0W8u8rna1KKlEewjPEeh8oTALPNlxEZViezOCZzE2b_OyJRBco7Yzgf2yP3BhuEct4FnlIW9jmHkTZpLF7TADEqZgM9CpvXX6F0rmBoj6w57Yg";
var playlists_url = "https://api.spotify.com/v1/users/"+ user_id+"/playlists"

request({url: playlists_url, headers:{Authorization:token}}, function(err, res) {
    if (err) {
        console.log("error getting playlist!")
    }
    if (res){
        console.log(res);
        var  playlists = JSON.parse(res.body);
        console.log(JSON.stringify(playlists.items, null, " "));
        var playlist_url = ""; //playlists[0].herf
        request({url: playlist_url, headers:{Authorization:token}}, function(err, res) {
            if (err) {
                console.log("error getting playlist!")
            }
            if (res){
                var  playlist = JSON.parse(res.body);
                console.log("playlist: " + playlist.name);
                playlist.tracks.items.forEach(function(track) {
                    console.log(track.track.name);
                });
            }
        });    
                
    }
});