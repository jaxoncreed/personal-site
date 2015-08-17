var blogMap = require('../posts/blogMap');
var fs = require('fs');

module.exports = {
    name: "posts",
    read: function(req, resource, params, config, callback) {
        var postInfo = blogMap[params.name];
        fs.readFile('./posts/' + postInfo.html + '.html', 'utf8', function(err, html) {
            if (err) {
                callback(err);
            } else {
                var response = {
                    name: params.name,
                    title: postInfo.title,
                    summary: postInfo.summary,
                    data: postInfo.date,
                    html: html
                }
                callback(null, response);
            }
        });
    }
}