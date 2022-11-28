import React, { useState } from "react";
import Select from 'react-select';

const BGColor = () => {
    var colors = [
        {
            value: 1,
            label: "deeppink"
        },
        {
            value: 2,
            label: "aqua"
        },
        {
            value: 3,
            label: "chartreuse"
        },
        {
            value: 4,
            label: "teal"
        },
        {
            value: 5,
            label: "lightcyan"
        },
    ]
    var [bgcolor, setbgcolor] = useState("");

    const eventChange = (event) => {
        setbgcolor(event.label);
    }

    return (
        <div>
            <style>
                {
                    'body {background-color:' + bgcolor + ';'
                }
            </style>
            <Select options={colors} onChange={eventChange}></Select>
            <center>
                <h1> {bgcolor}</h1>
            </center>
        </div>
    )
}

export default BGColor;
