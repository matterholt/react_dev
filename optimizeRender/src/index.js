import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Switch from './components/Switch'

function useToggle() {
    const [on, setOnState] = useState(true)

    const toggle = () => setOnState(o => !o)
    const setOff = () => setOnState(false)
    const setOn = () => setOnState(true)

    return { on, setOff, setOn, toggle }
}


function Toggle() {
    const [clickCounter, addToClickCount] = useState(0)
    const limitNumClick = clickCounter >= 4
    const { on, setOff, setOn, toggle } = useToggle()


    function handleSwitch() {
        addToClickCount(clickCounter + 1)
        toggle()
    }

    useEffect(() => { console.log({ on, clickCounter }) }, [on])
    return (
        <div>
            <button onClick={setOff}>Off</button>
            <button onClick={setOn}>On</button>
            <Switch on={on} onClick={handleSwitch} />
            {limitNumClick ? (
                <>
                    <p>TOO MANY CLICKS</p><br />
                    <button onClick={() => addToClickCount(0)}>RESET</button>
                </>
            ) : null}
        </div>
    )
}

function APP() {
    return (
        <div>
            <h1>Hello World</h1>
            <Toggle />
        </div>
    )

}


render(<APP />, document.getElementById("root"))