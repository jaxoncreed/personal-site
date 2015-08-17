
module.exports = function (context, payload, callback) {

    var name = payload.get("params").get("name");
    
    context.service.read('posts', {name: name}, {}, function(err, post) {
        if (err) {
            callback(err);
        } else {
            context.dispatch('POST_RECEIVED', post);
            callback();
        }
    });    
};

/*
{
    name: name
}

*/