import React from "react"
import "./App.scss"
import {Logo} from "./assets";


export const App: React.FC = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <div style={{marginBottom: "50px"}}>
                <img src={Logo} alt="React Logo" width={"100px"} height={"100px"}/>
                <h6>React TS | Webpack</h6>
            </div>
            <h3>{process.env.NODE_ENV}</h3>
        </div>
    )
}