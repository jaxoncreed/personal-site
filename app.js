var Fluxible = require('fluxible');
var fetchrPlugin = require('fluxible-plugin-fetchr');
var Application = require('./components/Application');
var ApplicationStore = require('./stores/ApplicationStore');
var RouteStore = require('./stores/RouteStore');
var PostStore = require('./stores/PostStore');
var LayoutStore = require('./stores/LayoutStore');
var actionMonitor = require('fluxible-plugin-action-monitor');

// create new fluxible instance
var app = new Fluxible({
    component: Application
});

app.plug(actionMonitor.actionMonitor);
var fetchrInstance = fetchrPlugin({
    xhrPath: '/api'
});
app.plug(fetchrInstance);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(PostStore);
app.registerStore(LayoutStore);
app.registerStore(actionMonitor.actionMonitorStore);

module.exports = app;
