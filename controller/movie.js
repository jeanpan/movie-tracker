var request = require('request');

exports.getMovieData = function(req, res) {
    request.get('https://api.themoviedb.org/3/movie/popular?api_key=', function(err, response, body) {
        if (!err && response.statusCode == 200) {
            res.send(body);
        }
    });
};

