'use client';

import { createStore } from "@reduxjs/toolkit";

const initialState = {
    isSidebarCollapsed: false,
};

const reducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarCollapsed: !state.isSidebarCollapsed,
            };
        default:
            return state;    
    }
};

const store = createStore(reducer);

export default store;