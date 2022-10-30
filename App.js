import Navigate from "./src/route/Navigete";
import { Name } from "./src/context";
import { useState } from "react";

import { Provider } from 'react-redux'
import { reducer } from './src/reducers'
import { configureStore } from "@reduxjs/toolkit";


export default function App() {
    const [name, setName] = useState("")

    const store = configureStore({ reducer: reducer })

    return (
        <Provider store={store}>
            <Name.Provider value={{ name, setName }}>
                <Navigate />
            </Name.Provider>
        </Provider>
    );
}


// npm install @reduxjs/toolkit
// npm install react-redux