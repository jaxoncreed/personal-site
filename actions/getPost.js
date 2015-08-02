
module.exports = function (context, payload, callback) {

    console.log("Called this");

    var name = payload.get("params").get("name");
    context.dispatch('POST_RECEIVED', name);
    callback();
};