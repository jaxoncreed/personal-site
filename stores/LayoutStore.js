import createStore from 'fluxible-app/utils/createStore';
import React from 'react';


var LayoutStore = createStore({
    storeName: "LayoutStore",
    handlers: {
        "TOGGLE_SIDE_BAR": "toggleSideBar"
    },
    initialize: function(dispatcher) {
        this.sideBarOpen = false;
    },
    toggleSideBar: function() {
        this.sideBarOpen = !this.sideBarOpen;
        this.emitChange();
        console.log(this.sideBarOpen);
    },
    isSideBarOpen: function() {
        return this.sideBarOpen;
    },
    dehydrate: function() {
        return {
            sideBarOpen: this.sideBarOpen
        };
    },
    rehydrate: function(state) {
        this.sideBarOpen = state.sideBarOpen;
    }
});

export default LayoutStore;