
/**
 *          import {
                useState,
                useEffect,
                useLayoutEffect,
                useRef,
                useCallback,
                useMemo,
                useReducer,
                useContext,
                useImperativeHandle,
                useDebugValue,
            } from 'react'
 */

/**
 *      Hooks: method (function) - (tính năng, trường hợp cụ thể) - móc vào
 *      Must import from 'react'
 *      Hooks không hoạt động trong class components.
 *      Hooks --> call at the TOP LEVEL of a component.
 */


// Chưa dùng Hooks, chỉ là UI component
function componentA() {
    return <h1>Không sử dụng Hooks</h1>
}

// Use hooks, hỗ trợ thêm nhiều tính năng
function componentB() {
    //useState example
    const [state, setState] = useState(initState)

    //useEffect example
    useEffect(() => {

    }, [deps])

    return <h1>Hooks</h1>
}


// Example useState
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Color() {
    const [color, setColor] = useState("red");

    return (
    <>
        <h1>Color is {color}!</h1>

        <button
            type="button"
            onClick={() => setColor("blue")}
        >Blue</button>

        <button
            type="button"
            onClick={() => setColor("red")}
        >Red</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Color />);

/**
 * -------------------------- 1. useState --------------------------------------
 *      Trạng thái dlieu
 *      Use: khi data change, UI auto update (render lại theo data)
 *      Use: import { useState } from 'react' -> add to function component
 * 
 */