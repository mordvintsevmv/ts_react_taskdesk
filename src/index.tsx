import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

