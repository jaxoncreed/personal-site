
module.exports = function (context, payload, callback) {

    var name = payload.get("params").get("name");
    context.dispatch('POST_RECEIVED', name);
    callback();
};