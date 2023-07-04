
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
 */


// jsx
import { useState } from "react" // lấy ra

function Component() {
    const [state, setState] = useState(initState)  // gắn vào component

}

//------------------------------------------------------
import { useState } from "react";

//const orders = [100, 200, 300]

function App() {
  const [counter, setCounter] = useState(1)

  /**
   * Initial state với callback
   * Đưa giá trị tính toán vào làm giá trị khởi tạo
   * 
   *  const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, current) => total + current)
        console.log(total)
        return total
      })
   */

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  /**
   *  Set state với callback
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)    - 1
    setCounter(prevState => prevState + 1)    - 4
    setCounter(prevState => prevState + 1)    - 7
  }
   */

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App

// ------------------------------------------------------

// initState: gtri khởi tạo
// arr (state: init, setState: sửa lại)

//------------------------------------------------------
// Ex: Update user infor
import { useState } from "react" 

function App() {
    const [infor, setInfor] = useState({
        name: 'Nguyen Hong Nhung',
        age: 20,
        address: 'Ha Noi, VN'
    })

    const updateInfor = () => {
        setInfor({
            ...infor,
            bio: 'Good things'
        })
    }

    return (
        <div className="App" style={{ padding: 20 }}>
          <h1>{JSON.stringify(infor)}</h1>
          <button onClick={updateInfor}>Update User Infor</button>
        </div>
      )
}



// -----------------------------------------------------------------------------
// ---- Two-way binding (ràng buộc 2 chiều)

// Xử lý form Name + Email Register
import { useState } from "react" 

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    //console.log(name)
    const handleSubmit = () => {
        // CALL API
        console.log({
            name,
            email
        })
    }

    return (
        <div style={{ padding: 32 }}>
            <input 
                value={name}    // truyền vào value -> tạo two-way binding
                onChange={e => setName(e.target.value)}
            />

            <input 
                value={email}    
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Change</button>
        </div>
    )
}

//export default App


//------------------------------------------------------------------
// --------------- Content.js
function Content() {
    return (
        <h1>Hello World!</h1>
    )
}

// --------------- App.js 
// Enter Toggle -> Show content -> Hidden content

import { useState } from 'react'
//import Content from './Content'    // File Conten.js (module)
function App() { // Component App
    const [show, setShow] = useState(false)

    return (
        <div style={{ padding: 30 }}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}   
        </div>
    )
}
//export default App


/**
 * -----------------------------------------------------------------------------
 * ----------------------- useEffect HOOKS -------------------------------------
 *              useEffect(<function>, <dependency>) 
 */

/**
 *  3 trường hợp:    1. useEffect(function)          - render mãi
 *                   2. useEffect(function, [])      - render 1 lần
 *                   3. useEffect(function, [deps])  - render lại khi value trong [deps] thay đổi
 */


// ----- 1. useEffect(function) - Render liên tục k dừng
import { useState, useEffect } from "react"

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })

    // function callback setTimeout, không có [deps] --> render lại nhiều lần
    return <h1>I have rendered {count} times!</h1>
}
// export default Timer



// ----- 2. useEffect(function, [])      - render 1 lần
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    }, [])  // [deps] = []



// ----- 3. useEffect(function, [deps])
// -- Enter button + -> Count * 2 = Calculation
import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(() => {
        setCal(() => count * 2);
    }, [count]); // [deps] = [count]

    return ( 
        <p>Count: {count}</p>,
        <button onClick={() => setCount((c) => c + 1)}>+</button>,
        <p>Calculation: {cal}</p>
    )
}

// --------- Effect Cleanup (memory leaks)
// -Timeouts, subscriptions, event listeners, and other effects that ko cần dùng tới nữa.

useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)       // function cleanup
  }, []);                              

  return <h1>I've rendered {count} times!</h1>;




/**
 * -----------------------------------------------------------------------------
 * ----------------------- useLayoutEffect Hook (X) -------------------------------------
 *              useLayoutEffect ( setup, dependencies? )
 * 
 *  Problem lq to UI (render UI SAU KHI cleanup, sau useLayoutEffect)    
 */

// App Enter "Run" -> Count + 1 
function Content() {
    const [count, setCount] = useState(0)

    // If useEffect, handleRun call --> run 1 -> 2 -> 3 -> 4(chớp nháy) do
    // hàm trong useEffect này sẽ run after handleRun + return
    // useEffect ---> useLayoutEffect
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}
//export default Content



/**
 * ----------------------------------------------------------------------------------
 * -------------------------------- useRef Hook -------------------------------------
 * 
            It can be lưu trữ giá trị có thể thay đổi mà không a re-render when updated.
            (Biến tham chiếu này sẽ được giữ nguyên giá trị của nó giữa các lần render của component, 
*           mà không gây ra việc render lại component khi giá trị của biến tham chiếu thay đổi.)

            useRef (initialValue) --> trả về Obj {current: }
 */

// App countdown 1 minute (start / stop button)
import { useRef, useState } from 'react'
//let timerID - Có thể - NHƯNG với React: mỗi file = 1 function component
function App() {
    const [count, setCount] = useState(60)
            
    const timerID = useRef()
       
    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        //console.log('Start -> ', timerID.current)
    }
            
    const handleStop = () => {
        clearInterval(timerID.current)
        //console.log('Stop -> ', timerID.current)
    }
            
    return (
        <div style={{ padding: 30 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
// export default App







//------------------------------------------------------------------
// --------------- Content.js
// Use React.memo
import { memo } from 'react'

function Content() {
    return (
        <h1>Hello World!</h1>
    )
}
//-----> export default memo(Content)
/**
 * -----------------------------------------------------------------------------
 * ----------------------- React.memo (to useCallback HOOKS) -------------------------------------
 *      1. memo() -> Higher Order Component (HOC)
 *      2. useCallback()            
 */
import { useState } from 'react'
import Content from './Content'

function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
// Component con <Content /> sẽ bị re-render mỗi khi "Click-me" --> KH cần thiết
    return (
        <div style={{ padding: '10px 30px' }}>
            <Content /> 
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}
//export default App


/**
 * -----------------------------------------------------------------------------
 * ----------------------- useContext Hook -------------------------------------
 *              
 */









