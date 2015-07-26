import createStore from 'fluxible-app/utils/createStore';
import React from 'react';
var blogMap = require('../posts/blogMap');


var PostStore = createStore({
    storeName: "PostStore",
    handlers: {
        "POST_RECEIVED": "handlePostReceived"
    },
    initialize: function(dispatcher) {
        this.name = null;
        this.title = null;
        this.summary = null;
        this.component = null;
    },
    handlePostReceived: function(name) {
        this.name = name;
        this.title = blogMap[name].title;
        this.summary = blogMap[name].summary;
        this.component = blogMap[name].component;
        this.emitChange();
    },
    getName: function() {
        return this.name;
    },
    getTitle: function() {
        return this.title;
    },
    getSummary: function() {
        return this.summary;
    },
    getComponent: function() {
        return this.component;
    },
    dehydrate: function() {
        return {
            name: this.name
        };
    },
    rehydrate: function(state) {
        this.name = state.name;
        this.title = blogMap[name].title;
        this.summary = blogMap[name].summary;
        this.component = blogMap[name].component;
    }
});

export default PostStore;