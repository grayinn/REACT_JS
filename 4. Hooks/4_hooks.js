
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
                value={email}    // truyền vào value -> tạo two-way binding
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Change</button>
        </div>
    )
}

//export default App





