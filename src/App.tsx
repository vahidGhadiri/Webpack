import React from "react"
import "./App.scss"

import {Logo} from "./assets";


export const App: React.FC = () => {
    return (
        <div onClick={() => {
            console.log(process.env.REACT_APP_BASE_URL)
        }}>
            <img src={Logo} alt="React Logo" width={"100px"} height={"100px"}/>
            <h6>React TS | Webpack</h6>
        </div>
    )
}