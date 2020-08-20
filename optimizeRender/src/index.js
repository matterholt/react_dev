import React, { useState, useEffect, useReducer } from "react";
import { render } from "react-dom";
import Switch from './components/Switch'

const actionType = {
    toggle: 'toggle',
    on: 'on',
    off: 'off'
}

function toggleReducer(state, action) {
    switch (action.type) {
        case actionType.toggle: {
            return { on: !state.on }
        }
        case actionType.on: {
            return { on: true }
        }
        case actionType.off: {
            return { on: false }
        }
        default: {
            throw new Error(`Unhandled type: ${action.type}`)
        }
    }
}


function useToggle() {
    const [{ on }, dispatch] = useReducer(toggleReducer, { on: false })


    // const toggle = () => setOnState(o => !o)
    const toggle = () => dispatch({
        type: actionType.toggle
    })
    const setOff = () => dispatch({ type: actionType.on })
    const setOn = () => dispatch({ type: actionType.off })

    return { on, setOff, setOn, toggle }
}


function Toggle() {
    const [clickCounter, addToClickCount] = useState(0)
    const limitNumClick = clickCounter >= 4

    // 
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