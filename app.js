var Fluxible = require('fluxible');
var Application = require('./components/Application');
var ApplicationStore = require('./stores/ApplicationStore');
var RouteStore = require('./stores/RouteStore');
var PostStore = require('./stores/PostStore');
var actionMonitor = require('fluxible-plugin-action-monitor').actionMonitor;

// create new fluxible instance
var app = new Fluxible({
    component: Application
});

app.plug(actionMonitor);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(PostStore);

module.exports = app;
