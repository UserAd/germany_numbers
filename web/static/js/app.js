// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from "react"
import ReactDOM from "react-dom"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

import phonePrefixesStore from "./app/stores/phone_prefixes.js"
import phonePrefixesReducer from "./app/reducers/phone_prefixes.js"
import SearchComponent from "./app/components/search.js"


let store = createStore(phonePrefixesReducer, {phonePrefixes: [], total_pages: 0, current_page: 0, query: ""}, compose(applyMiddleware(phonePrefixesStore), window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render(
  <Provider store={store}>
    <SearchComponent />
  </Provider>,
  document.getElementById("root")
)

store.dispatch({type: 'GET_PREFIXES_DATA', query: "", page: 0})
