import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./Reducers";

export let Store;

export const initialiseStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    Store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

const initialState = {

    // bp-frontend
    editableText: "Change me!",
    httpbin: {
        loading: false,
        status: "Unset Status"
    }
}