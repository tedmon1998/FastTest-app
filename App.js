import Navigate from "./src/route/Navigete";
import { Name } from "./src/context";
import { useState } from "react";


export default function App() {
    const [name, setName] = useState("")

    return (
        <Name.Provider value={{ name, setName }}>
            <Navigate />
        </Name.Provider>
    );
}
