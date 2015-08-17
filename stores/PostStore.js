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
        this.date = null;
        this.html = null;
    },
    handlePostReceived: function(post) {
        this.name = post.name;
        this.title = post.title;
        this.summary = post.summary;
        this.date = post.date;
        this.html = post.html;
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
    getDate: function() {
        return this.date;
    },
    getHtml: function() {
        return this.html;
    },
    dehydrate: function() {
        return {
            name: this.name,
            title: this.title,
            summary: this.summary,
            date: this.date,
            html: this.html
        };
    },
    rehydrate: function(state) {
        this.name = state.name;
        this.title = state.title;
        this.summary = state.summary;
        this.date = state.date;
        this.html = state.html;
    }
});

export default PostStore;